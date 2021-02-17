<template>
  <div class="content-container">
    <div class="content">
      <div class="content__post">
        <h1>
          {{ post.title }}
        </h1>
        <hr>
        <Post v-if="isCreated" :key="post._id" :post="post" :details="false" @new-comment="getComments" />
        <div class="post__comments">
          <Comment v-for="comment in comments" :key="comment._id" :comment="comment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {
      post: {},
      comments: [],
      isCreated: false
    }
  },
  async created () {
    await this.$postRepository.getPost(this.$route.params.id)
      .then((res) => {
        console.log('getPost: ', res.data.likes)
        this.post = res.data
      })
    this.getComments()
    this.isCreated = true
  },
  methods: {
    async getPost () {
      await this.$postRepository.getPost(this.$route.params.id)
        .then((res) => {
          console.log('getPost: ', res.data.likes)
          this.post = res.data
        })
    },
    async getComments () {
      await this.$postRepository.getComments(this.$route.params.id)
        .then((res) => {
          this.comments = res.data.comments
        })
    }
  }
}
</script>

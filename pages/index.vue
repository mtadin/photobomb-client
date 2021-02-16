<template>
  <div class="content-container">
    <div class="content">
      <div class="content__posts">
        <Post v-for="post in posts" :key="post._id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: []
    }
  },
  async created () {
    await this.$postRepository.getAllPosts()
      .then((res) => {
        this.posts = res.data
      })
  }
}
</script>

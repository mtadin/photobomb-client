<template>
  <div>
    <div class="post-container">
      <a :href="details ? postLink : '#'">
        <img :src="imgLink" class="post-container__post-image">
      </a>
      <div class="post-container__actions">
        <Button :icon="setLike" :tooltip="'Leave a like'" @click.native="likePost" />
        <Button :icon="'comment'" :tooltip="'Leave a comment'" @click.native="commentModal = true" />
        <Button v-if="details" :icon="'details'" :tooltip="'See additional information'" @click.native="$router.push(postLink)" />
      </div>
    </div>
    <transition name="fade">
      <div v-if="commentModal" class="modal">
        <div class="modal__modal-container">
          <form @submit.prevent="commentPost">
            <label for="text">Add Comment:</label>
            <textarea id="text" v-model="comment" rows="6" cols="50" />
            <div class="modal-container__buttons">
              <Button :type="'submit'" :content="'Submit'" />
              <Button :content="'Close'" @click.native="commentModal = false" />
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      _id: '',
      creator: '',
      title: '',
      img: '',
      tag: '',
      likes: {}
    },
    details: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      imgLink: '',
      postLink: '',
      commentModal: false,
      comment: '',
      likes: []
    }
  },
  computed: {
    setLike () {
      if (this.likes.includes(this.$auth.user.id)) {
        return 'heart-full'
      } else {
        return 'heart'
      }
    }
  },
  mounted () {
    console.log('mounted', this.post)
    this.likes = this.post.likes.likes
    console.log('likes', this.likes)
    this.imgLink = 'data:image/jpeg;base64,' + this.post.img
    this.postLink = '/post/' + this.post._id
  },
  beforeDestroy () {
    URL.revokeObjectURL(this.imgLink)
  },
  methods: {
    likePost () {
      this.$postRepository.likePost(this.post._id, this.$auth.user.id)
        .then((res) => {
          this.likes = res.data.likes
        })
    },
    commentPost () {
      this.$postRepository.commentPost(this.post._id, this.$auth.user.id, this.$auth.user.username, this.comment)
      this.commentModal = false
      this.comment = ''
      this.$emit('new-comment')
    }
  }
}
</script>

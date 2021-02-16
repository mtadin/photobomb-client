<template>
  <div class="post-container">
    <a :href="postLink">
      <img :src="imgLink" class="post-container__post-image">
    </a>
    <div class="post-container__actions">
      <Button :icon="'heart'" :tooltip="'Leave a like'" @click.native="likePost" />
      <Button :icon="'comment'" :tooltip="'Leave a comment'" @click.native="commentPost" />
      <Button :icon="'details'" :tooltip="'See additional information'" @click.native="$router.push(postLink)" />
    </div>
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
      tag: ''
    }
  },
  data () {
    return {
      imgLink: '',
      postLink: ''
    }
  },
  mounted () {
    this.imgLink = 'data:image/jpeg;base64,' + this.post.img
    this.postLink = '/post/' + this.post._id
  },
  beforeDestroy () {
    URL.revokeObjectURL(this.imgLink)
  },
  methods: {
    likePost () {
      this.$postRepository.likePost(this.post._id, this.$auth.user.id)
    },
    commentPost () {
    }
  }

}
</script>

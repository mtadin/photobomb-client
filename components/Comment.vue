<template>
  <div class="comment-container">
    <h4>
      {{ comment.username }}
    </h4>
    <span>
      {{ comment.comment }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      _id: '',
      username: '',
      comment: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>

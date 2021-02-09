<template>
  <div class="content-container">
    <div class="content">
      <div>
        <form enctype="multipart/form-data" @submit.prevent="uploadImage">
          <input type="file" name="file">
          <input type="submit" value="Submit">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    uploadImage () {
      console.log('mmm yes')
    }
  }
}
</script>

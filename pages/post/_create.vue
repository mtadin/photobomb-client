<template>
  <div class="content-container">
    <div class="content">
      <div>
        <form class="post-form" enctype="multipart/form-data" @submit.prevent="createPost">
          <img id="preview" src=""><br>
          <input id="upload" type="file" name="file">
          <div class="post-form__title">
            <label for="title">Enter a title for your post:</label>
            <input id="title" v-model="post.title" type="text">
          </div>
          <div class="post-form__tags">
            <label for="tags">Choose a tag best suited for your post:</label>
            <select id="tags" v-model="post.tag">
              <option v-for="tag in tags" :key="tag" option="tag">
                {{ tag }}
              </option>
            </select>
          </div>
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
      post: {
        title: '',
        tag: ''
      },
      img: null,
      options: {
        targetSize: 1,
        quality: 0.9,
        maxWidth: 1000,
        maxHeight: 1000
      },
      tags: []
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  async mounted () {
    this.imageHandler()
    await this.$postRepository.getPostTags().then((res) => {
      this.tags = res.data
    })
  },
  methods: {
    imageHandler () {
      const Compress = require('client-compress')
      const compress = new Compress(this.options)
      const upload = document.getElementById('upload')
      upload.addEventListener('change', (evt) => {
        const files = [...evt.target.files]
        compress.compress(files).then((conversions) => {
          const { photo, info } = conversions[0]

          // eslint-disable-next-line no-console
          console.log({ photo, info })

          const data = new FormData()
          data.append('blob', photo.data)
          this.img = data

          // Create an object URL which points to the photo Blob data
          const objectUrl = URL.createObjectURL(photo.data)

          // Set the preview img src to the object URL and wait for it to load
          const preview = document.getElementById('preview')
          Compress.loadImageElement(preview, objectUrl).then(() => {
            // Revoke the object URL to free up memory
            URL.revokeObjectURL(objectUrl)
          })
        })
      }, false)
    },
    async createPost () {
      console.log(this.post)
      await this.$postRepository.createPost(this.post)
        .then((res) => {
          this.$postRepository.uploadImage(res.data._id, this.img)
        })
      // this.$router.push('/user/me')
    }
  }
}
</script>

export default $axios => ({
  createPost (post) {
    return $axios.post('/api/post/create', post)
  },

  uploadImage (postId, image) {
    return $axios.post(`/api/post/create/${postId}`, image,
      { headers: { 'content-type': 'multipart/form-data' } })
  },

  getPostTags () {
    return $axios.get('/api/post/tags')
  },

  getPost (id) {
    return $axios.get(`/api/post/${id}`)
  },

  getAllPosts () {
    return $axios.get('/api/posts')
  }
})

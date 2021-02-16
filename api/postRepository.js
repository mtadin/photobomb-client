export default $axios => ({
  createPost (post) {
    return $axios.post('/api/post/create', post)
  },

  uploadImage (postId, image) {
    return $axios.post(`/api/post/create/${postId}`, image,
      { headers: { 'content-type': 'multipart/form-data' } })
  },

  getPost (id) {
    return $axios.get(`/api/post/${id}`)
  },

  getAllPosts () {
    return $axios.get('/api/posts')
  },

  getPostsByUserId (id) {
    return $axios.get(`/api/posts/${id}`)
  },

  getPostTags () {
    return $axios.get('/api/post/tags')
  },

  likePost (postId, userId) {
    return $axios.post(`api/post/${postId}/like`, { id: userId })
  },

  commentPost (postId, userId) {
    return $axios.post(`api/post/${postId}/comment`, { id: userId })
  },

  getLikes (postId) {
    return $axios.get(`api/post/${postId}/likes`)
  },

  getComments (postId) {
    return $axios.get(`api/post/${postId}/comments`)
  }
})

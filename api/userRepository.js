export default $axios => ({
  signup (newUser) {
    return $axios.post('/api/user/signup', newUser)
  },

  login (user) {
    return $axios.post('/api/user/login', user)
  },

  // refresh () {
  //   return $axios.post('/api/user/refresh')
  // },

  // getUser () {
  //   return $axios.get('/api/user', this.$auth.user)
  // },

  checkUsername (username) {
    return $axios.post('/api/user/checkUsername', username)
  }
})

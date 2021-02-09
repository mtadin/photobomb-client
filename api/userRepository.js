export default $axios => ({
  signup (newUser) {
    return $axios.post('/api/user/signup', newUser)
  },

  checkUsername (username) {
    return $axios.post('/api/user/checkUsername', { usernameToCheck: username })
  }
})

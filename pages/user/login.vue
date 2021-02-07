<template>
  <div class="content-container">
    <div class="content">
      <div class="content__signup">
        <h1>
          log in
        </h1>
        <NuxtLink to="/user/signup">
          ... or create a new account
        </NuxtLink>
        <hr>
        <form @submit.prevent="userLogin">
          <div class="content__signup__form">
            <div class="content__signup__form__input">
              <label>Username: </label>
              <input v-model="login.username" type="text">
            </div>
            <div class="content__signup__form__input">
              <label>Password: </label>
              <input v-model="login.password" type="password">
            </div>
            <div>
              <Button type="submit" :content="'Submit'" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: {
        username: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    userLogin () {
      return this.$auth
        .loginWith('localRefresh', {
          data: {
            username: this.login.username,
            password: this.login.password
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err)
          this.error = err.response?.data
        })
    }
  }
}
</script>

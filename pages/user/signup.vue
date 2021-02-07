<template>
  <div class="content-container">
    <div class="content">
      <div class="content__signup">
        <h1>
          create a new account
        </h1>
        <NuxtLink to="/user/login">
          ... or log in with an existing account
        </NuxtLink>
        <hr>
        <form @submit.prevent="userSignup">
          <div class="content__signup__form">
            <div class="content__signup__form__input">
              <label>Username: </label>
              <input v-model="signup.username" type="text">
            </div>
            <span :class="usernameCheck.available ? 'green' : 'red'">
              {{ usernameCheck.message }}
            </span>
            <Button :content="'Check username availability'" @click.native="checkUsername" />
          </div>
          <div class="content__signup__form">
            <div class="content__signup__form__input">
              <label>Password: </label>
              <input v-model="signup.password" type="password">
            </div>
            <div class="content__signup__form__input">
              <label>Confirm: </label>
              <input v-model="signup.passwordMatch" type="password">
            </div>
            <span :class="minimum ? 'green' : 'red'">
              {{ passwordCheck.minimumMessage }}
            </span>
            <span :class="uppercase ? 'green' : 'red'">
              {{ passwordCheck.uppercaseMessage }}
            </span>
            <span :class="number ? 'green' : 'red'">
              {{ passwordCheck.numberMessage }}
            </span>
            <span :class="match ? 'green' : 'red'">
              {{ passwordCheck.matchMessage }}
            </span>
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
      signup: {
        username: '',
        password: '',
        passwordMatch: null
      },
      usernameCheck: {
        available: false,
        message: ''
      },
      passwordCheck: {
        minimumMessage: 'At least 8 characters.',
        uppercaseMessage: 'At least one uppercase letter.',
        numberMessage: 'At least one number.',
        matchMessage: 'Passwords must match.'
      }
    }
  },
  computed: {
    minimum () {
      const minimumChars = /(?=.{8,})/g
      return minimumChars.test(this.signup.password)
    },
    number () {
      const minimumNumber = /(?=.*\d)/g
      return minimumNumber.test(this.signup.password)
    },
    uppercase () {
      const minimumCapital = /(?=.*[A-Z])/g
      return minimumCapital.test(this.signup.password)
    },
    match () {
      return this.signup.passwordMatch === this.signup.password
    }
  },
  methods: {
    async checkUsername () {
      await this.$userRepository.checkUsername(this.signup.username)
        .then((res) => {
          this.usernameCheck.available = res.data
          if (this.usernameCheck.available) {
            this.usernameCheck.message = 'This username is available.'
          } else {
            this.usernameCheck.message = 'This username is taken.'
          }
        })
    },
    async userSignup () {
      if (!this.usernameCheck.available) {
        this.checkUsername()
        if (this.minimum && this.number && this.uppercase && this.match && this.signup.username && this.usernameCheck.available) {
          await this.$userRepository.signup(this.signup)
            .then((res) => {
              // TODO login and reroute
              this.$router.push('/user/login')
            })
        }
      }
    }
  }
}
</script>

<template>
  <div class="navigation">
    <div class="navigation__header">
      <div class="navigation__header__title">
        <Icon name="logo" />
        <NuxtLink to="/">
          photobomb
        </NuxtLink>
      </div>
      <div class="navigation__header__actions">
        <h4>
          ... for amateurs and professionals alike.
        </h4>
        <div class="navigation__header__actions__dropdown-container">
          <div class="dropdown" style="float:right;">
            <Icon name="person-full" />
            <div class="dropdown-content">
              <a v-if="$auth.loggedIn" href="/">Home page</a>
              <a v-if="$auth.loggedIn" href="/user/me">Profile</a>
              <a v-if="$auth.loggedIn" @click="logout">Logout</a>
              <a v-if="!$auth.loggedIn" href="/user/login">Login</a>
              <a v-if="!$auth.loggedIn" href="/user/signup">Signup</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      active: false
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>

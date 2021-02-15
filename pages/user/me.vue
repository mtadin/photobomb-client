<template>
  <div class="content-container">
    <div class="content">
      <div class="content__profile">
        <h1>
          Welcome to your profile, {{ $auth.user.username }}
        </h1>
        <hr>
        <div class="content__profile__posts">
          <div class="content__profile__posts__title">
            <h2>
              Your posts
            </h2>
            <div>
              <Button :content="'+ Add new post'" @click.native="$router.push('/post/create')" />
            </div>
          </div>
          <hr>
        </div>
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
  }
}
</script>

<template>
  <div class="navigation">
    <div class="navigation__header">
      <div class="navigation__header__title-container">
        <Icon name="logo" />
        <NuxtLink to="/">
          photobomb
        </NuxtLink>
      </div>
      <div class="navigation__header__actions-container">
        <h4>
          ... for amateurs and professionals alike.
        </h4>
        <a @click="toggleDropdown">
          <Icon name="person-full" />
        </a>
        <div class="navigation__header__actions-container__dropdown">
          <div v-if="active">
            Menu
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  methods: {
    toggleDropdown () {
      this.active = !this.active
    }
  }
}
</script>

<template>
  <div class="icon" v-html="require(`@/assets/icons/${name}.svg?raw`)" />
</template>

<script>
export default {
  props: {
    name: { type: String, default: 'logo' }
  }
}
</script>

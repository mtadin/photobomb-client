<template>
  <button type="button">
    <Icon v-if="icon" :name="icon" />
    {{ content }}
  </button>
</template>

<script>
export default {
  props: {
    content: { type: String, default: '' },
    icon: { type: String, default: '' }
  }
}
</script>

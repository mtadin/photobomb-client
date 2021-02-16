<template>
  <button type="button" :title="tooltip">
    <Icon v-if="icon" :name="icon" />
    {{ content }}
  </button>
</template>

<script>
export default {
  props: {
    content: { type: String, default: '' },
    icon: { type: String, default: '' },
    tooltip: { type: String, default: '' },
  }
}
</script>

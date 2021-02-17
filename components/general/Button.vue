<template>
  <button :type="type" :title="tooltip">
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
    type: { type: String, default: 'button' }
  }
}
</script>

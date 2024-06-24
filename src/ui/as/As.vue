<script setup lang="ts">
withDefaults(defineProps<{ as: string }>(), {
  as: 'div'
})
</script>

<template>
  <component :is="as">
    <slot></slot>
  </component>
</template>

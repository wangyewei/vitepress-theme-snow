<script setup lang="ts">
import { softBouncePreset } from '../../constants/spring'
const props = withDefaults(defineProps(), {
  className: ''
})
</script>

<template>
  <div
    v-motion
    :class="props.className"
    :initial="{ opacity: 0.0001, y: 50 }"
    :visible="{ opacity: 1, y: 0 }"
    :duration="0.4 * 1000"
    :custom="{
      transition: {
        ...softBouncePreset
      }
    }"
  >
    <slot></slot>
  </div>
</template>

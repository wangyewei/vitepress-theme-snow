<script setup lang="ts">
import { softBouncePreset } from '../../constants/spring'
</script>

<template>
  <div
    v-motion
    class="group relative text-center leading-[4] lg:text-left [&_*]:inline-block"
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

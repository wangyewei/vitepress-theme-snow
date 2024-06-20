<script setup>
import { ref, computed, toRefs } from 'vue'
import { useMotion } from '@vueuse/motion'
import { microReboundPreset } from '../../constants/spring'

const props = defineProps({
  text: String,
  eachDelay: Number,
  initialDelay: Number,
  className: String
})
const {
  text,
  eachDelay = 0.1,
  initialDelay = 0,
  className = ''
} = toRefs(props)
const chars = ref(Array.from(text.value))
</script>

<template>
  <span
    v-motion
    class="inline-block"
    v-for="(char, i) in chars"
    :key="i"
    :initial="{ transform: 'translateY(10px)', opacity: 0.001 }"
    :visibleOnce="{
      opacity: 1,
      transform: 'translateY(0px)'
    }"
    :custom="{
      transition: {
        ...microReboundPreset
      }
    }"
    :duration="0.2 * 1000"
    :delay="(i * eachDelay + initialDelay) * 1000"
  >
    {{ char }}
  </span>
</template>

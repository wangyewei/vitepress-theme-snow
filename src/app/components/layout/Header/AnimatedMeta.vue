<script lang="ts" setup>
import { Transition } from 'vue'
import { microReboundPreset } from '../../../../constants/spring'
import { useShouldShowMeta } from './hooks/useMetaInfo'
import { useMotions } from '@vueuse/motion'
const shouldShow = useShouldShowMeta()
const motions = useMotions()
</script>

<template>
  <Transition @leave="(_, done) => motions['animated'].leave(done)">
    <div
      v-if="shouldShow"
      v-motion="`animated`"
      class="absolute inset-0 flex min-w-0 items-center justify-between gap-3 px-0 lg:px-16"
      :initial="{ opacity: 0, y: 20 }"
      :leave="{
        opacity: 0,
        y: 20,
        transition: {
          delay: 100,
          duration: 500,
          ...microReboundPreset
        }
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          delay: 100,
          duration: 500,
          ...microReboundPreset
        }
      }"
    >
      <slot></slot>
    </div>
  </Transition>
</template>

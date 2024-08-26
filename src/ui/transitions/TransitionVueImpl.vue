<script lang="ts" setup>
import { Transition, ref, type HTMLAttributes } from 'vue'
import { useMotions, type Variant } from '@vueuse/motion'
import { microReboundPreset } from '../../constants/spring'
const motions = useMotions()

withDefaults(
  defineProps<{
    visible: boolean
    class?: HTMLAttributes['class']
    initial?: Variant
    leave?: Variant
    enter?: Variant
    delay?: number
    duration?: number
    preset?: Variant
    as?: string
  }>(),
  {
    visible: false,
    class: '',

    delay: 100,
    duration: 500,

    as: 'div'
  }
)

const transitionRef = ref()

const emit = defineEmits(['click'])
const listener = {
  onClick: () => emit('click')
}
</script>

<template>
  <Transition @leave="(_, done) => motions['animated-vue'].leave(done)">
    <component
      :is="as"
      v-motion="`animated-vue`"
      ref="transitionRef"
      :class="class"
      :initial="initial"
      :leave="{
        ...leave,
        transition: { delay, duration, ...(preset || microReboundPreset) }
      }"
      :enter="{
        ...enter,
        transition: { delay, duration, ...(preset || microReboundPreset) }
      }"
      v-bind="listener"
    >
      <slot></slot>
    </component>
  </Transition>
</template>

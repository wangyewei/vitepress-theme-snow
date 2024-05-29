import { defineComponent, onMounted, ref } from 'vue'
import { useMotion } from '@vueuse/motion'
export default defineComponent({
  setup(props, { slots }) {
    const buttonMotionRef = ref<HTMLButtonElement>()

    const variants = {
      initial: { scale: 1 },
      enter: { scale: 1 },
      hovered: { scale: 1.02 },
      focused: { scale: 1.02 },
      tapped: { scale: 0.95 }
    }

    onMounted(() => {
      useMotion(buttonMotionRef.value, variants)
    })

    return () => (
      <button
        ref={(r: HTMLButtonElement) => (buttonMotionRef.value = r)}
        {...{ props }}
      >
        {slots.default?.()}
      </button>
    )
  }
})

import {
  ButtonHTMLAttributes,
  defineComponent,
  onMounted,
  ref,
  toRefs
} from 'vue'
import { useMotion } from '@vueuse/motion'

export const MotionButtonBase = defineComponent<
  Omit<ButtonHTMLAttributes, 'class'> & { className?: string | string[] },
  ['click']
>({
  setup(props, { slots }) {
    const buttonMotionRef = ref()
    const { className } = toRefs(props)

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
        {...props}
        ref={(r) => (buttonMotionRef.value = r)}
        class={className.value}
      >
        {slots.default?.()}
      </button>
    )
  }
})
//@ts-ignore
MotionButtonBase.props = ['className']

export default MotionButtonBase

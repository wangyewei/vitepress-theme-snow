import { defineComponent, onMounted, ref, toRefs } from 'vue'
import { Variant, useMotion, type MotionVariants } from '@vueuse/motion'
import { microReboundPreset } from '../../constants/spring'

export default function createMotion<T extends string>(
  motionParamaters: MotionVariants<T> & { preset?: Variant }
) {
  const { initial, enter, visible, preset } = motionParamaters

  return defineComponent({
    props: {
      duration: {
        type: Number,
        default: 500
      },
      delay: {
        type: Number,
        default: 0
      },
      className: String
    },
    setup(props, { slots }) {
      const { duration, delay } = toRefs(props)
      const { className } = props

      const motionRef = ref()
      const variants = {
        initial,
        visible: {
          ...(visible || enter),
          transition: {
            duration: duration.value,
            delay: delay.value,
            ...(preset || microReboundPreset)
          }
        }
      }

      onMounted(() => {
        useMotion(motionRef.value, variants)
      })
      return () => (
        <div ref={(r: HTMLElement) => (motionRef.value = r)} class={className}>
          {slots.default?.()}
        </div>
      )
    }
  })
}

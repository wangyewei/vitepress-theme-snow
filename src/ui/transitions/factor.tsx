import { ComponentInstance, defineComponent, onMounted, ref, toRefs } from 'vue'
import { Variant, useMotion, type MotionVariants } from '@vueuse/motion'
import { microReboundPreset } from '../../constants/spring'

export default function createMotion<T extends string>(
  motionParamaters: MotionVariants<T> & { preset?: Variant }
) {
  const {
    initial,
    enter,
    visible,
    preset,
    leave: leaveProp,
    ...rest
  } = motionParamaters

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
      className: String,
      as: { type: String, default: 'div' }
    },
    emits: ['mouseenter', 'mouseover', 'mouseleave'],
    setup(props, { slots, expose, emit }) {
      const { duration, delay } = toRefs(props)
      const { className, as } = props

      const motionRef = ref()
      const variants = {
        initial,
        enter: {
          ...(visible || enter),
          transition: {
            duration: duration.value,
            delay: delay.value,
            ...(preset || microReboundPreset)
          }
        },
        leave: leaveProp,
        ...rest
      } satisfies MotionVariants<any>

      onMounted(() => {
        useMotion(motionRef.value, variants)
      })

      expose({
        motionRef
      })

      const listener = {
        mouseleave: emit('mouseleave'),
        mouseenter: emit('mouseenter'),
        mouseover: emit('mouseover')
      }

      return () =>
        h(
          as,
          {
            class: className,
            ref: (r: ComponentInstance<any>) => (motionRef.value = r),
            ...listener
          },
          slots.default?.()
        )
    }
  })
}

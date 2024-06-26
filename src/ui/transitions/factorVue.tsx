import { defineComponent, toRefs } from 'vue'
import { Variant, type MotionVariants } from '@vueuse/motion'

import TransitionVueImpl from './TransitionVueImpl.vue'

export default function createMotion<T extends string>(
  motionParamaters: MotionVariants<T> & { preset?: Variant }
) {
  const { initial, enter, visible, preset, leave, ...rest } = motionParamaters

  const TransitionVueView = defineComponent<
    {
      duration?: number
      delay?: number
      visible?: boolean
      as?: string
    },
    ['click']
  >((props, { slots, emit }) => {
    const { duration, delay, as, visible } = toRefs(props)

    const listener = {
      onClick: () => emit('click')
    }

    return () => (
      <TransitionVueImpl
        as={as?.value}
        initial={initial}
        enter={enter}
        preset={preset}
        leave={leave}
        duration={duration?.value}
        delay={delay?.value}
        visible={visible?.value}
        {...listener}
        {...rest}
      >
        {slots.default?.()}
      </TransitionVueImpl>
    )
  })
  // @ts-ignore
  TransitionVueView.props = ['duration', 'delay', 'as', 'visible']

  return TransitionVueView
}

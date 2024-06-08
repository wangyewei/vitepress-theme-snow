import { Fragment, PropType, computed, defineComponent, ref } from 'vue'
import Portal from '../portal/Portal'
import createMotion from '../transitions/factor'
import { microReboundPreset } from '../../constants/spring'
import {
  flip,
  offset,
  shift,
  useFloating
} from '@allindevelopers/vue-floating-ui'

export type TriggerType = 'click' | 'both' | 'hover'
export default defineComponent({
  props: {
    triggerElement: {
      type: Function as PropType<() => JSX.Element>
    },
    popoverWrapperClassNames: String,
    popoverClassNames: {
      type: String || (Array as PropType<string | string[]>)
    },
    trigger: {
      type: String as PropType<TriggerType>,
      default: 'hover'
    },
    strategy: {
      type: String as PropType<'fixed'>,
      default: 'fixed'
    },
    placement: String as PropType<'bottom-start'>,
    wrapperClassNames: {
      type: String || Array
    }
  },
  setup(props, { slots }) {
    const {
      wrapperClassNames,
      popoverWrapperClassNames,
      popoverClassNames,
      trigger,
      strategy: strategyProp,
      placement = 'bottom-start'
    } = props

    const isOpen = ref(false)
    const timer = ref()

    const clearTimter = () => {
      if (timer.value) {
        clearTimeout(timer.value)
        timer.value = null
      }
    }
    const showPopover = () => {
      clearTimter()
      isOpen.value = true
    }

    const closePopover = () => {
      clearTimter()
      timer.value = setTimeout(() => {
        isOpen.value = false
      }, 200)
    }
    const triggerMap: Record<TriggerType, Record<string, any>> = {
      click: {
        onClick: showPopover
      },
      hover: {
        onMouseover: showPopover,
        onMouseleave: closePopover
      },
      both: {
        onClick: showPopover,
        onMouseover: showPopover,
        onMouseleave: closePopover
      }
    }
    const listener = computed(() => triggerMap[trigger])

    const { x, y, strategy, reference, floating } = useFloating({
      middleware: [flip({ padding: 20 }), offset(10), shift()],
      strategy: strategyProp,
      placement
    })

    const motionRefStyles = computed(() => ({
      position: strategy.value,
      top: (y.value ?? '') + 'px',
      left: (x.value ?? '') + 'px',
      visibility: 'visible'
    }))

    const TiggerWrapper = () => (
      <div
        role="note"
        class={['inline-block', wrapperClassNames]}
        {...listener.value}
        ref={(el: HTMLDivElement) => (reference.value = el)}
      >
        {slots.triggerWrapper?.()}
      </div>
    )
    return () => (
      <Fragment>
        <TiggerWrapper />
        {isOpen.value && (
          <Portal>
            <div
              class={[
                'float-popover',
                'z-[99] relative',
                popoverWrapperClassNames
              ]}
              {...listener.value}
            >
              <MotionPopover
                tabIndex={-1}
                role="tooltip"
                class={[
                  'rounded-xl border border-zinc-400/20 p-4 outline-none backdrop-blur-lg dark:border-zinc-500/30',
                  'bg-zinc-50/80 dark:bg-neutral-900/80',
                  'relative z-[2]',
                  'shadow-lg p-0',
                  popoverClassNames
                ]}
                style={motionRefStyles.value}
                ref={(el: any) => (floating.value = el?.motionRef)}
                onMouseover={() => (isOpen.value = true)}
              >
                {slots.default?.()}
              </MotionPopover>
            </div>
          </Portal>
        )}
      </Fragment>
    )
  }
})

const MotionPopover = createMotion({
  initial: { translateY: '10px', opacity: 0 },
  visible: { translateY: '0px', opacity: 1 },
  preset: microReboundPreset
})

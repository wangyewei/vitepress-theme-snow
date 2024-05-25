import { Fragment, PropType, defineComponent } from 'vue'
import Portal from '../portal/Portal'

export default defineComponent({
  props: {
    triggerElement: {
      type: Function as PropType<() => JSX.Element>
    },
    popoverWrapperClassNames: String,
    popoverClassNames: {
      type: String || (Array as PropType<string | string[]>)
    }
  },
  setup(props, { slots }) {
    const { triggerElement, popoverWrapperClassNames, popoverClassNames } =
      props

    const TriggerWrapper = <div class="inline-block">{triggerElement?.()}</div>
    return () => (
      <Fragment>
        {TriggerWrapper}
        <Portal>
          <div
            class={[
              'float-popover',
              'relative z-[99]',
              popoverWrapperClassNames
            ]}
          >
            <div
              tabIndex={-1}
              role="tooltip"
              class={['relative z-[2]', 'shadow-lg', popoverClassNames]}
            >
              {slots.default?.()}
            </div>
          </div>
        </Portal>
      </Fragment>
    )
  }
})

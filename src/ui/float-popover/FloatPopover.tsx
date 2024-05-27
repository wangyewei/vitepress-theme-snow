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
    const { popoverWrapperClassNames, popoverClassNames } = props

    return () => (
      <Fragment>
        <div class="inline-block">{slots.triggerWrapper?.()}</div>
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

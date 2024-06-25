import { defineComponent, toRefs } from 'vue'
import { factorVue } from '../transitions'

interface FabContainerProps {
  show: boolean
}
export const FabContainer = defineComponent<FabContainerProps>(
  (props, { slots }) => {
    const { show } = toRefs(props)
    return () => (
      <div
        class={[
          'font-lg fixed bottom-[calc(2rem+env(safe-area-inset-bottom))] left-[calc(100vw-3rem-1rem)] z-[9] flex flex-col',
          !show.value ? 'translate-x-[calc(100%+2rem)]' : '',
          'transition-transform duration-300 ease-in-out'
        ]}
      >
        {slots.default?.()}
      </div>
    )
  }
)
//@ts-ignore
FabContainer.props = ['show']

export const FabBase = defineComponent((props) => {
  const AnimatedPreset = factorVue({
    initial: { opacity: 0.3, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0.3, scale: 0.8 }
  })
  return () => (
    <AnimatedPreset as="button" visible>
      Button
    </AnimatedPreset>
  )
})

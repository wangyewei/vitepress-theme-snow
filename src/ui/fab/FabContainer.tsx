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

export const FabBase = defineComponent<{}, ['click']>((_, { slots, emit }) => {
  const AnimatedPreset = factorVue({
    initial: { opacity: 0.3, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0.3, scale: 0.8 }
  })

  return () => (
    <AnimatedPreset
      as="button"
      visible
      class={[
        'mt-2 flex items-center justify-center',
        'size-12 text-lg md:size-10 md:text-base',
        'outline-accent hover:opacity-100 focus:opacity-100 focus:outline-none',
        'rounded-xl border border-zinc-400/20 backdrop-blur-lg dark:border-zinc-500/30 dark:text-zinc-200',
        'bg-zinc-50/80 shadow-lg dark:bg-neutral-900/80',
        'transition-all duration-500 ease-in-out'
      ]}
      onClick={() => emit('click')}
    >
      {slots.default?.()}
    </AnimatedPreset>
  )
})

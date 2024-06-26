import { computed, defineComponent } from 'vue'
import { factorVue } from '../transitions'
import useScroll from '../../hooks/useScroll'

export const FabContainer = defineComponent((_, { slots }) => {
  const { isScrollingDown } = useScroll()

  /**
   * TODO
   *  UX enhancement
   *
   *  1. should be `false` by default
   *  2. should be `false` when scrolling up past a certain point
   *  3. should be `false` when scrolling down to the end
   */
  const shouldHide = computed(() => isScrollingDown.value)

  return () => (
    <div
      class={[
        'font-lg fixed bottom-[calc(2rem+env(safe-area-inset-bottom))] left-[calc(100vw-3rem-1rem)] z-[9] flex flex-col',
        shouldHide.value ? 'translate-x-[calc(100%+2rem)]' : '',
        'transition-transform duration-300 ease-in-out'
      ]}
    >
      {slots.default?.()}
    </div>
  )
})
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

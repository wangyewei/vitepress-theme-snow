import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(_, { slots }) {
    const __is_shoadow = ref(false)

    return () => (
      <header
        class={[
          'fixed inset-x-0 top-0 z-[9] mr-[var(--removed-body-scroll-bar-size)] h-[4.5rem] overflow-hidden transition-shadow duration-200',
          __is_shoadow.value &&
            'shadow-none shadow-neutral-100 dark:shadow-neutral-800/50 lg:shadow-sm'
        ]}
      >
        {slots?.default && slots.default()}
      </header>
    )
  }
})

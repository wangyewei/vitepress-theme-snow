import { defineComponent } from 'vue'

export default defineComponent({
  setup(_, { slots }) {
    return () => (
      <div class="relative mx-auto block size-full min-w-0 max-w-[1800px] flex-col flex-wrap items-center lg:flex lg:flex-row">
        {slots
          .default?.()
          .slice(0, 2)
          .map((slot, i) => (
            <div
              key={i}
              class={[
                'flex w-full flex-col center lg:h-auto lg:w-1/2',
                i === 0 && 'mt-[120px] lg:mt-0 h-[15rem] lg:h-1/2'
              ]}
            >
              <div class="relative max-w-full lg:max-w-2xl">{slot}</div>
            </div>
          ))}

        {slots.default?.()[2]}
      </div>
    )
  }
})

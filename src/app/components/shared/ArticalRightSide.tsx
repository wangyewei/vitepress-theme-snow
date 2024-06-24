import { defineComponent } from 'vue'
import ClientOnly from '../../../lib/ClientOnly'

export default defineComponent((_, { slots }) => {
  return () => (
    <ClientOnly>
      <div class="absolute inset-y-0 right-0 hidden translate-x-full lg:block">
        <aside class="sticky top-[120px] mt-[120px] h-[calc(100vh-6rem-4.5rem-150px-120px)]">
          <div class="relative h-full">{slots.default?.()}</div>
        </aside>
      </div>
    </ClientOnly>
  )
})

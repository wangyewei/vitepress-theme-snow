import { defineComponent } from 'vue'
import ClientOnly from '../../../../lib/ClientOnly'
import ArticalRightSide from '../../../../app/components/shared/ArticalRightSide'

export default defineComponent(() => {
  return () => (
    <ClientOnly>
      <div class="absolute inset-y-0 right-0 hidden translate-x-full lg:block">
        <ArticalRightSide />
      </div>
    </ClientOnly>
  )
})

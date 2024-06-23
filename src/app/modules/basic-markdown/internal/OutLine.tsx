import { defineComponent, inject, nextTick, onMounted } from 'vue'
import {
  useRightContent,
  LayoutRightcontextSymbol
} from '../../../../providers/LayoutRightProvider'
import ClientOnly from '../../../../lib/ClientOnly'

export default defineComponent(() => {
  const { ids } = useRightContent()

  console.log(ids.value)
  return () => (
    <ClientOnly>
      <div> outline</div>
    </ClientOnly>
  )
})

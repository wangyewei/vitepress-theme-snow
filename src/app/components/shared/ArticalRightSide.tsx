import { defineComponent } from 'vue'
import { useIsMobile } from '../../../hooks/useIsMobile'
import { useRightContent } from '../../../providers/LayoutRightProvider'
export default defineComponent((_, { slots }) => {
  const isMobile = useIsMobile()
  if (isMobile.value) {
    return () => <div></div>
  }
  return () => <AritcleRightImpl>{slots.default?.()}</AritcleRightImpl>
})
const AritcleRightImpl = defineComponent(() => {
  const { headers } = useRightContent()

  return () => (
    <aside class="sticky top-[120px] mt-[120px] h-[calc(100vh-6rem-4.5rem-150px-120px)]">
      <div class="relative h-full">
        <ul>
          {Array.from(headers.value || []).map((header) => (
            <li
              class="cursor-pointer"
              onClick={() => header?.scrollIntoView({ behavior: 'smooth' })}
            >
              {header.id}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
})

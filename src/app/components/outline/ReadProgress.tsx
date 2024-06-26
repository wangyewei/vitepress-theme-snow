import { Fragment, computed, defineComponent } from 'vue'
import { Divider } from '../../../ui/divider'
import { useRightContent } from '../../../providers/LayoutRightProvider'
import { FaSolidProgress80 } from '../icons/media-collection'
import { MotionButtonBase } from '../../../ui/button'
import { FaSolidArrowUpCircle } from '../icons/arrow-collection'
import Portal from '../../../ui/portal/Portal'

export default defineComponent(() => {
  const { percent } = useRightContent()

  const computedStyle = computed(
    () =>
      `mt-1 flex flex-nowrap items-center gap-2 opacity-50 transition-all duration-500 hover:opacity-100 ${
        percent.value < 10 ? 'pointer-events-none !opacity-0' : ''
      }`
  )
  return () => (
    <Fragment>
      <Divider />
      <div class="text-gray-800 dark:text-neutral-300">
        <div class="flex items-center gap-2">
          <FaSolidProgress80 width={16} height={16} />
          <span>{Math.floor(percent.value)}%</span>
        </div>
        <MotionButtonBase
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={computedStyle.value}
        >
          <FaSolidArrowUpCircle width={12} height={12} />
          <span class="whitespace-nowrap">回到顶部</span>
        </MotionButtonBase>
      </div>
    </Fragment>
  )
})

export const ReadProgressVertical = defineComponent(() => {
  const { percent } = useRightContent()

  return () => (
    <Portal>
      <div
        class={[
          'fixed inset-y-0 right-0 z-[199] w-px transition-opacity duration-200 ease-in-out',
          'opacity-100'
        ]}
      >
        <div
          class="absolute top-0 w-full bg-accent/80 duration-75 ease-linear"
          style={{
            height: `${percent.value}%`
          }}
        />
      </div>
    </Portal>
  )
})

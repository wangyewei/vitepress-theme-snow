import { Fragment, computed, defineComponent } from 'vue'
import { Divider } from '../../../ui/divider'
import { useRightContent } from '../../../providers/LayoutRightProvider'
import { FaSolidProgress80 } from '../icons/media-collection'
import { MotionButtonBase } from '../../../ui/button'
import { FaSolidArrowUpCircle } from '../icons/arrow-collection'

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

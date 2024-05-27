import { PropType, defineComponent } from 'vue'
import type { VPYevThemeNavItem } from 'vitepress-theme-yev'

import FloatPopover from '../../../ui/float-popover/FloatPopover'
export default defineComponent({
  props: {
    submenu: {
      type: Array as PropType<VPYevThemeNavItem[]>,
      default: () => []
    }
  },
  setup(_, { slots }) {
    return () => (
      <FloatPopover popoverWrapperClassNames="z-[19] relative">
        {{
          triggerWrapper: slots.default?.()
        }}
      </FloatPopover>
    )
  }
})

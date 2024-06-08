import { PropType, defineComponent, toRefs } from 'vue'
import type { VPYevThemeNavItem } from 'vitepress-theme-yev'

import FloatPopover from '../../../ui/float-popover/FloatPopover'
import { useEnumHeaderIcons } from '../icons/menu-collection'
export default defineComponent({
  props: {
    submenu: {
      type: Array as PropType<VPYevThemeNavItem[]>,
      default: () => []
    }
  },
  setup(props, { slots }) {
    const { submenu } = toRefs(props)
    return () => (
      <FloatPopover
        strategy="fixed"
        headless
        offset={10}
        placement="bottom"
        popoverWrapperClassNames="z-[19] relative"
        popoverClassNames={[
          'select-none rounded-xl bg-white/60 outline-none dark:bg-neutral-900/60',
          'border border-zinc-900/5 shadow-lg shadow-zinc-800/5 backdrop-blur-md',
          'dark:border-zinc-100/10 dark:from-zinc-900/70 dark:to-zinc-800/90',
          'relative flex w-[130px] flex-col',
          'focus-visible:!ring-0'
        ]}
      >
        {{
          triggerWrapper: slots.default?.(),
          default: () =>
            submenu.value?.length && submenu.value.map((m) => <Item {...m} />)
        }}
      </FloatPopover>
    )
  }
})

const Item = defineComponent<VPYevThemeNavItem>((props) => {
  return () => (
    <a
      href={props.path}
      class="relative flex w-full items-center justify-around space-x-2 px-4 py-3 duration-200 hover:bg-accent/5 hover:text-accent"
      role="button"
    >
      {!!props.icon && <span>{useEnumHeaderIcons(props.icon)}</span>}
      <span>{props.title}</span>
    </a>
  )
})
// @ts-ignore
Item.props = ['title', 'path', 'icon']

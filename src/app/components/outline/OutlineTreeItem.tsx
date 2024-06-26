import { defineComponent, toRefs } from 'vue'
import { tv } from 'tailwind-variants'
const styles = tv({
  base: [
    'relative mb-[1.5px] inline-block min-w-0 max-w-full leading-normal text-neutral-content',
    'truncate text-left tabular-nums opacity-50 transition-all duration-500 hover:opacity-80',
    'inline-block w-fit break-keep'
  ].join(','),
  variants: {
    status: {
      active: 'ml-2 opacity-100'
    }
  }
})

export type OutlineTreeItemProps = {
  isActive: boolean
  title: string
}
const OutlineTreeItem = defineComponent<OutlineTreeItemProps, ['click', 'tap']>(
  (props, { emit }) => {
    const { isActive } = toRefs(props)
    const { title } = props
    return () => (
      <span
        onClick={() => emit('click')}
        onTouchend={() => emit('tap')}
        class={styles({
          status: isActive.value ? 'active' : undefined
        })}
      >
        <span class="cursor-pointer break-keep">{title}</span>
      </span>
    )
  }
)

//@ts-ignore
OutlineTreeItem.props = ['isActive', 'title']

export default OutlineTreeItem

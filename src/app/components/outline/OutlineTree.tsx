import { computed, defineComponent } from 'vue'
import { useRightContent } from '../../../providers/LayoutRightProvider'
import OutlineTreeItem from './OutlineTreeItem'
import AnimatedTreeItem from './AnimatedTreeItem'
import { Hero } from 'hero-motion'

export default defineComponent((_, { slots }) => {
  return () => (
    <ul
      class={[
        'scrollbar-none flex grow flex-col px-2',
        'absolute h-full min-h-[120px] flex flex-col'
      ]}
    >
      <OutlineTreeInner>{slots.default?.()}</OutlineTreeInner>
    </ul>
  )
})

export const OutlineTreeInner = defineComponent<{}, ['click', 'tap']>(
  (_, { slots, emit }) => {
    const { headers, activeHeader } = useRightContent()

    const handleItemClick = (header?: HTMLHeadingElement) => {
      header?.scrollIntoView({ behavior: 'smooth' })
    }
    const handleItemTap = (header?: HTMLHeadingElement) => {
      emit('tap')
      setTimeout(() => handleItemClick(header), 150)
    }
    return () => (
      <ul class="scrollbar-none overflow-auto w-fit">
        {Array.from(headers.value || []).map((header, idx) => {
          const isActive = computed(() => activeHeader.value === header.id)
          return (
            <AnimatedTreeItem
              delay={200 * idx + 1}
              class={'relative leading-none'}
            >
              {isActive.value && (
                <Hero
                  as="span"
                  layoutId="active-toc-item"
                  class="absolute inset-y-[3px] left-0 w-[2px] rounded-sm bg-accent"
                />
              )}
              <OutlineTreeItem
                title={header.innerText}
                isActive={isActive.value}
                onClick={() => handleItemClick(header)}
                onTap={() => handleItemTap(header)}
              />
            </AnimatedTreeItem>
          )
        })}

        {slots.default && <li class="shrink-0">{slots.default?.()}</li>}
      </ul>
    )
  }
)

import { FC } from 'src/shared'
import { useSheetContext } from '../../../../../ui/sheet/SheetContext'

export const HeaderActionMenuButton: FC = (props, { slots }) => {
  const { isOpen } = useSheetContext()

  return (
    <div
      role="button"
      tabIndex={1}
      class={[
        'group size-10 rounded-full bg-base-100',
        'px-3 text-sm ring-1 ring-zinc-900/5 transition dark:ring-white/10 dark:hover:ring-white/20',
        'flex center'
      ]}
      aria-label="Header Action"
      onClick={() => (isOpen.value = true)}
      {...props}
    >
      {slots.default?.()}
    </div>
  )
}

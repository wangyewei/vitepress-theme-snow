import { defineComponent } from 'vue'
import {
  DrawerRoot,
  DrawerTrigger,
  DrawerOverlay,
  DrawerPortal,
  DrawerContent,
  DrawerTitle
} from 'vaul-vue'
import SheetContextProvider, { useSheetContext } from './SheetContext'
export type PresentSheetProps = {
  dismissible?: boolean
}

const DrawerWithContext = defineComponent({
  setup(_, { slots }) {
    const { isOpen } = useSheetContext()
    return () => (
      <DrawerRoot open={isOpen.value} onRelease={() => (isOpen.value = false)}>
        <DrawerTrigger>{slots.default?.()}</DrawerTrigger>
        <DrawerPortal>
          <DrawerOverlay
            class="fixed inset-0 bg-neutral-800/40"
            // @ts-ignore
            onClick={() => (isOpen.value = false)}
          />
          <DrawerContent
            aria-describedby={undefined}
            class="fixed inset-x-0 bottom-0 mt-24 flex max-h-[95vh] flex-col rounded-t-[10px] bg-base-100 p-4 z-[998]"
          >
            <DrawerTitle></DrawerTitle>

            <div class="mx-auto mb-8 h-1.5 w-12 shrink-0 rounded-full bg-zinc-300 dark:bg-neutral-800" />

            {slots.content?.()}
          </DrawerContent>
        </DrawerPortal>
      </DrawerRoot>
    )
  }
})
export default defineComponent<PresentSheetProps>({
  setup(_, { slots }) {
    return () => (
      <SheetContextProvider>
        <DrawerWithContext>
          {{
            default: slots.default?.(),
            content: slots.content?.()
          }}
        </DrawerWithContext>
      </SheetContextProvider>
    )
  }
})

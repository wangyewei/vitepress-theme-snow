import { Fragment, defineComponent } from 'vue'
import PresentSheet from '../../../ui/sheet'
import { useSheetContext } from '../../../ui/sheet/SheetContext'
import Fab from '../../../ui/fab/Fab'
import Portal from '../../../ui/portal/Portal'
import { FaSolidOutline } from '../icons/media-collection'
import { OutlineTreeInner } from './OutlineTree'
import { ReadProgressVertical } from './ReadProgress'
export default defineComponent(() => {
  return () => (
    <Fragment>
      <PresentSheet>
        {{
          trigger: () => <ActionSheetContextButon />,
          content: () => <ContenxtBody />
        }}
      </PresentSheet>
      <ReadProgressVertical />
    </Fragment>
  )
})
/**
 * TODO:
 *  should hide this button while scrolling down, and show it
 *  when scrolling up.
 */
const ActionSheetContextButon = defineComponent(() => {
  const { isOpen } = useSheetContext()
  return () => (
    <Portal>
      <Fab onClick={() => (isOpen.value = true)}>
        <FaSolidOutline width={20} height={20} />
      </Fab>
    </Portal>
  )
})

const ContenxtBody = defineComponent(() => {
  const { isOpen } = useSheetContext()
  return () => (
    <div class="scrollbar-none mt-12 max-h-[80dvh] w-[90vw] space-y-4 overflow-auto pb-24">
      <h2 class=" mb-4 flex justify-center text-lg font-medium">Outline</h2>
      <OutlineTreeInner onTap={() => (isOpen.value = false)} />
    </div>
  )
})

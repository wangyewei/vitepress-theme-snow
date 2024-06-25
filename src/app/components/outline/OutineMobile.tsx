import { defineComponent, ref } from 'vue'
import PresentSheet from '../../../ui/sheet'
import Fab from '../../../ui/fab/Fab'

export default defineComponent((_, { slots }) => {
  return () => (
    <PresentSheet>
      {{ default: () => <Fab></Fab>, content: () => <div>123</div> }}
    </PresentSheet>
  )
})

// export const ActionButton = defineComponent(() => {
//   const shouldHide = ref(false)
//   return () => (
//     <div
//       class={[
//         'font-lg fixed bottom-[calc(2rem+env(safe-area-inset-bottom))] left-[calc(100vw-3rem-1rem)] z-[9] flex flex-col',
//         shouldHide.value ? 'translate-x-[calc(100%+2rem)]' : '',
//         'transition-transform duration-300 ease-in-out'
//       ]}
//     ></div>
//   )
// })

// export const HeaderDrawerButton: FC = () => (
//   <PresentSheet>
//     {{
//       default: () => (
//         <HeaderActionMenuButton>
//           <FaSolidMenu />
//         </HeaderActionMenuButton>
//       ),
//       content: () => <HeaderDrawerContent />
//     }}
//   </PresentSheet>
// )

// export default HeaderDrawerButton

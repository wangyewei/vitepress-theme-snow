import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useIsMobile } from '../../../hooks/useIsMobile'
import OutlineTree from './OutlineTree'

export default defineComponent((_, { slots }) => {
  const isMobile = useIsMobile()
  if (isMobile.value) {
    return () => <div></div>
  }
  return () => <AritcleRightImpl>{slots.default?.()}</AritcleRightImpl>
})

const AritcleRightImpl = defineComponent(() => {
  const outlineWrapperRef = ref()

  const setMaxWidth = () => {
    if (outlineWrapperRef.value) {
      outlineWrapperRef.value.style.width = `${
        window.innerWidth -
        outlineWrapperRef.value.getBoundingClientRect().x -
        30
      }px`
    }
  }
  onMounted(() => {
    setMaxWidth()
    window.addEventListener('resize', setMaxWidth)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', setMaxWidth)
  })
  return () => (
    <div
      class={['st-toc z-[3]', 'relative font-sans', 'static ml-4 h-full']}
      ref={(el) => (outlineWrapperRef.value = el)}
    >
      <OutlineTree />
    </div>
  )
})

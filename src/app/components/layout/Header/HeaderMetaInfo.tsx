import { defineComponent } from 'vue'
import { useShouldShowMeta } from './hooks/useHeaderBgOpacity'
export default defineComponent(() => {
  const shouldShow = useShouldShowMeta()

  return () => shouldShow.value && <div>meta info</div>
})

import { defineComponent } from 'vue'
import Avator from './Avator'
import { useShouldShowMeta } from './hooks/useMetaInfo'
import { useIsMobile } from '../../../../hooks/useIsMobile'
export default defineComponent({
  setup() {
    const shuoldShowMeta = useShouldShowMeta()
    const isMobole = useIsMobile()
    return () => (!shuoldShowMeta.value || !isMobole.value) && <Avator />
  }
})

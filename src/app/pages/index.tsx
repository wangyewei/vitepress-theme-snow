import { defineComponent } from 'vue'
import Portal from '../../ui/portal/Portal'

export default defineComponent(() => () => (
  <div>
    <Portal>
      <div class="page-head-gradient"></div>
    </Portal>
  </div>
))

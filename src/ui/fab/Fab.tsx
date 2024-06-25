import { defineComponent } from 'vue'
import { FabContainer, FabBase } from './FabContainer'

export default defineComponent(() => {
  return () => (
    <FabContainer show>
      <FabBase></FabBase>
    </FabContainer>
  )
})

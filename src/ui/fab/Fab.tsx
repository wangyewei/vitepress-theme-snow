import { defineComponent } from 'vue'
import { FabContainer, FabBase } from './FabContainer'

export default defineComponent<{}, ['click']>((_, { slots, emit }) => {
  return () => (
    <FabContainer>
      <FabBase onClick={() => emit('click')}>{slots.default?.()}</FabBase>
    </FabContainer>
  )
})

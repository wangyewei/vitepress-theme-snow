import { defineComponent } from 'vue'
import { RightToLeftTransitionView } from '../../../ui/transitions'
export default defineComponent((_, { slots }) => {
  return () => (
    <RightToLeftTransitionView as="li" delay={200}>
      {slots.default?.()}
    </RightToLeftTransitionView>
  )
})

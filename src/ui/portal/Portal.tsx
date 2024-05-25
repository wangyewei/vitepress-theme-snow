import { Teleport, defineComponent } from 'vue'

export default defineComponent({
  setup(_, { slots }) {
    return () => <Teleport to={document.body}>{slots.default?.()}</Teleport>
  }
})

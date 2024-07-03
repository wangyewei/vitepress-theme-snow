import { defineComponent } from 'vue'

export default defineComponent((_, { slots }) => () => {
  return slots.default?.()
})

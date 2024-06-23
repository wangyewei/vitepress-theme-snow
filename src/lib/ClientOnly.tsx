import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent((_, { slots }) => {
  const clientOnly = ref(false)
  onMounted(() => {
    clientOnly.value = true
  })
  return () => clientOnly.value && slots.default?.()
})

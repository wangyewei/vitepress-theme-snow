import { useData } from 'vitepress'
import { Fragment, defineComponent } from 'vue'

export default defineComponent((_, { slots }) => {
  const { page } = useData()
  return () => page.value.isNotFound && <Fragment>{slots.default?.()}</Fragment>
})

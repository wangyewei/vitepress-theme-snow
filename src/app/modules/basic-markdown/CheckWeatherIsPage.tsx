import { useData } from 'vitepress'
import { computed, defineComponent } from 'vue'

export default defineComponent((_, { slots }) => {
  const { page } = useData()
  const isPage = computed(() => !page.value.frontmatter?.layout)

  return () => isPage.value && <div>{slots.default?.()}</div>
})

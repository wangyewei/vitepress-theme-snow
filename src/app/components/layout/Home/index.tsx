import { defineComponent } from 'vue'
import Hero from './Hero'
import { useData } from 'vitepress'

export default defineComponent({
  setup() {
    const { page } = useData()

    return () =>
      page.value.frontmatter?.layout === 'home' && (
        <div>
          <Hero />
        </div>
      )
  }
})

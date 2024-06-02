import { defineComponent } from 'vue'
import Hero from './Hero'
import { useData } from 'vitepress'

export default defineComponent({
  setup() {
    const { page } = useData()

    return () =>
      page.value.frontmatter?.layout === 'home' && (
        <main class="relative z-[1] px-4 lg:pt-[4.5rem] fill-content md:px-0">
          <div class="mt-20 min-w-0 max-w-screen overflow-hidden lg:mt-[-4.5rem] lg:h-dvh lg:min-h-[800px]">
            <Hero />
          </div>
        </main>
      )
  }
})

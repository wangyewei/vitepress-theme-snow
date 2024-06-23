import { computed, defineComponent, Fragment } from 'vue'
import Hero from './Hero'
import { useData } from 'vitepress'

export default defineComponent(() => () => (
  <CheckIsHome>
    <div class="mt-20 min-w-0 max-w-screen overflow-hidden lg:mt-[-4.5rem] lg:h-dvh lg:min-h-[800px]">
      <Hero />
    </div>
  </CheckIsHome>
))

const CheckIsHome = defineComponent((_, { slots }) => {
  const { page } = useData()

  const isHomePage = computed(() => page.value.frontmatter?.layout === 'home')
  return () => isHomePage.value && <Fragment>{slots.default?.()}</Fragment>
})

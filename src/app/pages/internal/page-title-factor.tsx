import { useData } from 'vitepress'
import { defineComponent } from 'vue'

export default function titleFactor() {
  const { page } = useData()
  const PageTitle = defineComponent(() => {
    return () => (
      <h1 class="text-balance text-center lg:text-left">
        {page.value.frontmatter?.title}
      </h1>
    )
  })

  const PageSubTitle = defineComponent(() => {
    return () => (
      <h2 class="text-center text-lg text-gray-600/70 dark:text-neutral-400 lg:text-left">
        {page.value.frontmatter?.subTitle}
      </h2>
    )
  })

  return { PageTitle, PageSubTitle }
}

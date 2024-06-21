import { defineComponent } from 'vue'
import { useMetaInfo, useSiteMetaInfo } from './hooks/useMetaInfo'

import AnimatedMeta from './AnimatedMeta.vue'

export default defineComponent(() => {
  const { title, subTitle } = useMetaInfo()
  const { seoTitle, slug } = useSiteMetaInfo()
  return () => (
    <AnimatedMeta>
      <div class="flex min-w-0 shrink grow flex-col">
        <small class="min-w-0 truncate">
          <span class="text-gray-600/60 dark:text-gray-300/60">
            {subTitle.value}
          </span>
        </small>

        <h2 class="min-w-0 truncate text-[1.2rem] font-medium leading-normal">
          {title.value}
        </h2>
      </div>

      <div class="hidden min-w-0 shrink-5 flex-col text-right leading-5 lg:flex">
        <div class="hidden min-w-0 shrink-[5] flex-col text-right leading-5 lg:flex">
          <small class="min-w-0 truncate whitespace-pre text-gray-600/60 dark:text-gray-300/60">
            {slug.value}
          </small>
          <span class="font-medium text-gray-600 dark:text-gray-300">
            {seoTitle.value}
          </span>
        </div>
      </div>
    </AnimatedMeta>
  )
})

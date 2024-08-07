import { useData } from 'vitepress'
import { ComputedRef, computed } from 'vue'
import { useHeaderBgOpacity } from './useHeaderBgOpacity'
export function useHasMetaInfo(): ComputedRef<boolean> {
  const { page } = useData()
  const hasMetaInfo = computed(() => page.value.frontmatter?.meta === true)

  return hasMetaInfo
}

export function useShouldShowMeta() {
  const { opacity } = useHeaderBgOpacity()
  const hasMeta = useHasMetaInfo()

  return computed(() => opacity.value >= 1 && hasMeta.value)
}

export function useMetaInfo() {
  /**
   * `useMetaInfo` should always be used after `useHasMetaInfo`, so there
   * is no need to check again.
   *
   *  // const hasMetaInfo = useHasMetaInfo()
   *  // if (!hasMetaInfo.value) return null
   */

  const { page } = useData()

  return {
    title: computed(() => page.value.frontmatter?.title),
    subTitle: computed(() => page.value.frontmatter?.subTitle)
  }
}

export function useSiteMetaInfo() {
  const { site, page } = useData()

  return {
    seoTitle: computed(() => site.value.title),
    slug: computed(() => page.value.relativePath?.replaceAll('.md', ''))
  }
}

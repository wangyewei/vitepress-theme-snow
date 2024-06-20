import { useData } from 'vitepress'
import { ComputedRef, computed } from 'vue'

export default function (): ComputedRef<boolean> {
  const { page } = useData()
  const hasMetaInfo = computed(() => page.value.frontmatter?.meta === true)

  return hasMetaInfo
}

import { useData } from 'vitepress'
import { ComputedRef, computed } from 'vue'
import { formatTimestamp } from '../lib/time-processor'

export default function (): [boolean, ComputedRef<string>] {
  const { page } = useData()
  const lastEditTimestamp = page.value?.lastUpdated

  if (!lastEditTimestamp) {
    return [false, computed(() => '')]
  }

  const lastEditTime = computed(() => formatTimestamp(lastEditTimestamp))

  return [true, lastEditTime]
}

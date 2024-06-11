import { inBrowser } from 'vitepress'
import { ref, computed, onMounted, onUnmounted, type ComputedRef } from 'vue'

export function useIsMobile(threshold: number = 720): ComputedRef<boolean> {
  if (!inBrowser) return computed(() => false)

  const width = ref(window.innerWidth)

  const isMobile = computed(() => width.value < threshold)

  const handleResize = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return isMobile
}

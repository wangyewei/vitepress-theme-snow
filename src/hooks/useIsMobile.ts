import { ref, computed, onMounted, onUnmounted, type ComputedRef } from 'vue'

export function useIsMobile(threshold: number = 720): ComputedRef<boolean> {
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

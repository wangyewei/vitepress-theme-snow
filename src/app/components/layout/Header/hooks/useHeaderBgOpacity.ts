import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useIsMobile } from '../../../../../hooks/useIsMobile'

const headerShouldShowBg = ref(true)

export const useHeaderShouldShowBg = () => {
  return computed(() => headerShouldShowBg.value)
}

export function useMenuOpacity() {
  const { opacity } = useHeaderBgOpacity()

  return computed(() => 1 - opacity.value)
}

export function useHeaderBgOpacity() {
  const threshold = 50
  const isMobile = useIsMobile()
  const headerShouldShowBg = computed(
    () => useHeaderShouldShowBg().value || isMobile.value
  )
  const scrollY = ref(window.scrollY)

  const handleScroll = () => {
    scrollY.value = window.scrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  const opacity = computed(() => {
    if (!headerShouldShowBg.value) {
      return 0
    }
    if (scrollY.value >= threshold) {
      return 1
    }
    return Math.floor((scrollY.value / threshold) * 100) / 100
  })

  return {
    opacity
  }
}

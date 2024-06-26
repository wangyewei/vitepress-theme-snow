import { onMounted, onUnmounted, ref } from 'vue'

export enum ScrollDirection {
  UP = 'up',
  DOWN = 'down'
}

export default function useScrollDirection() {
  const scrollDirection = ref<ScrollDirection>(ScrollDirection.UP)
  const isScrollingDown = ref<boolean>(false)
  let lastScrollTop = 0
  let scrollTimeout: number | null = null

  const onScroll = () => {
    const currentScrollTop =
      window.scrollY || document.documentElement.scrollTop

    if (currentScrollTop > lastScrollTop) {
      scrollDirection.value = ScrollDirection.DOWN
      isScrollingDown.value = true
      resetScrollTimeout()
    } else {
      scrollDirection.value = ScrollDirection.UP
      isScrollingDown.value = false
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop // For Mobile or negative scrolling
  }

  const resetScrollTimeout = () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }
    scrollTimeout = window.setTimeout(() => {
      isScrollingDown.value = false
    }, 300) // Adjust the delay as needed
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll)
  })

  onUnmounted(() => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }
    window.removeEventListener('scroll', onScroll)
  })

  return {
    direction: scrollDirection,
    isScrollingDown
  }
}

export function debounce(fn: (...args: any[]) => void, delay: number) {
  let timeoutId: NodeJS.Timeout | undefined
  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

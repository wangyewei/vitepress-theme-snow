const inBrowser = typeof document !== null
import { watch, ref } from 'vue'
import { useRoute } from 'vitepress';
export default function usePathname() {
  if (!inBrowser) return ref('')
  const route = useRoute()
  const pathname = ref(route.path)

  watch(route, () => {
    pathname.value = route.path
  })

  return pathname
}
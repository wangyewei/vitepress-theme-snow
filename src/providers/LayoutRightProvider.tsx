import {
  defineComponent,
  provide,
  InjectionKey,
  inject,
  onMounted,
  ref,
  Fragment,
  Ref,
  onUnmounted
} from 'vue'
import { BASIC_MARKDOWN_CLASSNAME } from '../constants/markdown-cls'
import { debounce } from '../lib/denounce'

type LayoutRightContextReturns = {
  headers: Ref<HTMLCollectionOf<HTMLHeadingElement> | undefined>
  activeHeader: Ref<string | undefined>
  percent: Ref<number>
}
export const LayoutRightcontextSymbol: InjectionKey<LayoutRightContextReturns> =
  Symbol('layout right provier')

const OBSERVE_OPTS: IntersectionObserverInit = {
  rootMargin: '0px 0px -70% 0px',
  root: null,
  threshold: [0]
}

/**
 * TODO:
 * should recive custom h-tag level
 */
const OUTLINETAG = 'h2'

export default defineComponent((_, { slots }) => {
  const __data_is_ready = ref(false)
  const headers = ref<HTMLCollectionOf<HTMLHeadingElement> | undefined>()
  const markdownContentRef = ref<Element>()

  const getHeaders = () => {
    const markdownContent = document.getElementsByClassName(
      BASIC_MARKDOWN_CLASSNAME
    )?.[0]
    if (!markdownContent) return
    markdownContentRef.value = markdownContent
    const _headers = markdownContent.getElementsByTagName(OUTLINETAG)

    headers.value = _headers
    __data_is_ready.value = true
  }

  const activeHeader = ref<string>('')
  const observer = ref<IntersectionObserver | null>(null)
  const observeCallback: IntersectionObserverCallback = (entreies) => {
    entreies.forEach((entry) => {
      const header = entry.target as HTMLElement
      if (entry.isIntersecting) {
        activeHeader.value = header.id
      }
    })
  }
  const createObserver = () => {
    observer.value = new IntersectionObserver(observeCallback, OBSERVE_OPTS)

    Array.from(headers.value || []).forEach((header) => {
      observer.value?.observe(header)
    })
  }

  const markdownScrollProgress = ref(0)

  const calculateMarkdownScrollPercent = () => {
    if (!markdownContentRef.value) return
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    if (scrollHeight === 0) {
      markdownScrollProgress.value = 0
    } else {
      markdownScrollProgress.value = (scrollTop / scrollHeight) * 100
    }
  }

  onMounted(() => {
    getHeaders()
    createObserver()
    window.addEventListener('scroll', calculateMarkdownScrollPercent)
  })

  onUnmounted(() => {
    observer.value?.disconnect()
    window.removeEventListener('scroll', calculateMarkdownScrollPercent)
  })

  provide(LayoutRightcontextSymbol, {
    headers,
    activeHeader,
    percent: markdownScrollProgress
  })

  return () => __data_is_ready.value && <Fragment>{slots.default?.()}</Fragment>
})

export function useRightContent() {
  const content = inject(LayoutRightcontextSymbol)
  if (!content) {
    throw Error(`useRightContent is triggered without providers.`)
  }

  return content
}

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

type LayoutRightContextReturns = {
  headers: Ref<HTMLCollectionOf<HTMLHeadingElement> | undefined>
  activeHeader: Ref<string | undefined>
}
export const LayoutRightcontextSymbol: InjectionKey<LayoutRightContextReturns> =
  Symbol('layout right provier')

/**
 * TODO:
 * should recive custom h-tag level
 */
const OUTLINETAG = 'h2'

export default defineComponent((_, { slots }) => {
  const __data_is_ready = ref(false)
  const headers = ref<HTMLCollectionOf<HTMLHeadingElement> | undefined>()
  const markdownContentRef = ref<Element>()
  const getOutLine = () => {
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
  const createObserver = () => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const header = entry.target as HTMLElement
          if (entry.isIntersecting) {
            activeHeader.value = header.id
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -70% 0px',
        threshold: [0]
      }
    )

    Array.from(headers.value || []).forEach((header) => {
      observer.value?.observe(header)
    })
  }

  onMounted(() => {
    getOutLine()
    createObserver()
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  provide(LayoutRightcontextSymbol, { headers, activeHeader })

  return () => __data_is_ready.value && <Fragment>{slots.default?.()}</Fragment>
})

export function useRightContent() {
  const content = inject(LayoutRightcontextSymbol)
  if (!content) {
    throw Error(`useRightContent is triggered without providers.`)
  }

  return content
}

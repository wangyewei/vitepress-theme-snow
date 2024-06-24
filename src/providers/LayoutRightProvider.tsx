import {
  defineComponent,
  provide,
  InjectionKey,
  inject,
  onMounted,
  ref,
  Fragment,
  Ref
} from 'vue'
import { BASIC_MARKDOWN_CLASSNAME } from '../constants/markdown-cls'

type LayoutRightContextReturns = {
  headers: Ref<HTMLCollectionOf<HTMLHeadingElement> | undefined>
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

  const getOutLine = () => {
    const markdownContent = document.getElementsByClassName(
      BASIC_MARKDOWN_CLASSNAME
    )?.[0]
    if (!markdownContent) return
    const _headers = markdownContent.getElementsByTagName(OUTLINETAG)

    headers.value = _headers
    __data_is_ready.value = true
  }
  onMounted(getOutLine)

  provide(LayoutRightcontextSymbol, { headers })

  return () => __data_is_ready.value && <Fragment>{slots.default?.()}</Fragment>
})

export function useRightContent() {
  const content = inject(LayoutRightcontextSymbol)
  if (!content) {
    throw Error(`useRightContent is triggered without providers.`)
  }

  return content
}

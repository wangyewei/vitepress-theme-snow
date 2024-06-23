import Portal from '../ui/portal/Portal'
import {
  defineComponent,
  provide,
  InjectionKey,
  inject,
  computed,
  onMounted,
  ref,
  Fragment,
  ComputedRef,
  Ref
} from 'vue'
import { BASIC_MARKDOWN_CLASSNAME } from '../constants/markdown-cls'

type LayoutRightContextReturns = {
  ids: Ref<String[]>
}
export const LayoutRightcontextSymbol: InjectionKey<LayoutRightContextReturns> =
  Symbol('layout right provier')

/**
 * TODO:
 * should recive custom h-tag level
 */
export default defineComponent((_, { slots }) => {
  const dataIsReady = ref(false)

  const ids = ref<string[]>([])
  const getOutLine = () => {
    const markdownContent = document.getElementsByClassName(
      BASIC_MARKDOWN_CLASSNAME
    )?.[0]
    if (!markdownContent) return
    const headers = markdownContent.getElementsByTagName('h2')

    ids.value = Array.from(headers).map((el) => el.id)

    dataIsReady.value = true
  }
  onMounted(getOutLine)

  provide(LayoutRightcontextSymbol, { ids })

  return () => dataIsReady.value && <Fragment>{slots.default?.()}</Fragment>
})

export function useRightContent() {
  const content = inject(LayoutRightcontextSymbol)
  if (!content) {
    throw Error(`useRightContent is triggered without providers.`)
  }

  return content
}

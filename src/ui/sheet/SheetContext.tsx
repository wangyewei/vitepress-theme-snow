import {
  Ref,
  defineComponent,
  inject,
  provide,
  ref,
  InjectionKey
} from 'vue'

export type SheetContextReturns = {
  isOpen: Ref<boolean>
}
const SheetContextSymbol: InjectionKey<SheetContextReturns> = Symbol()
export default defineComponent({
  setup(_, { slots }) {
    const isOpen = ref(false)

    provide(SheetContextSymbol, {
      isOpen
    })

    return () => slots.default?.()
  }
})

export const useSheetContext = (): SheetContextReturns => {
  const context = inject(SheetContextSymbol)
  if (!context) {
    throw new Error('`useSheetContext` called without provider')
  }
  return context
}

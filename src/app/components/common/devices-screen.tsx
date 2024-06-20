import { useIsMobile } from '../../../hooks/useIsMobile'
import { Fragment, defineComponent } from 'vue'

export const MobileScreen = defineComponent((_, { slots }) => {
  const isMobile = useIsMobile()
  return () => isMobile.value && <Fragment>{slots.default?.()}</Fragment>
})

export const DesktopScreen = defineComponent((_, { slots }) => {
  const isMobile = useIsMobile()
  return () => !isMobile.value && <Fragment>{slots.default?.()}</Fragment>
})

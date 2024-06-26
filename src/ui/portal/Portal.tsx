import { Teleport, defineComponent } from 'vue'
import ClientOnly from '../../lib/ClientOnly'
type PortalProps = {
  to?: HTMLElement
}
export default defineComponent<PortalProps>((props, { slots }) => () => (
  <ClientOnly>
    <Teleport to={props.to || 'body'}>{slots.default?.()}</Teleport>
  </ClientOnly>
))

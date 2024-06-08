import { Teleport, defineComponent } from 'vue'

type PortalProps = {
  to?: HTMLElement
}
export default defineComponent<PortalProps>((props, { slots }) => () => (
  <Teleport to={props.to || document.body}>{slots.default?.()}</Teleport>
))

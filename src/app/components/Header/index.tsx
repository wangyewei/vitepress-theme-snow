import { defineComponent } from 'vue'
import HeaderWithShadow from './HeaderWithShadow'
import BluredBackground from './BluredBackground'
import HeaderArea, {
  HeaderLeftButtonArea,
  HeaderLogoArea,
  HeaderCenterArea
} from './HeaderArea'
import AnimatedLogo from './AnimatedLogo'

export default defineComponent({
  setup() {
    return () => (
      <HeaderWithShadow>
        <BluredBackground />
        <HeaderArea>
          <HeaderLeftButtonArea></HeaderLeftButtonArea>

          <HeaderLogoArea>
            <AnimatedLogo />
          </HeaderLogoArea>

          <HeaderCenterArea></HeaderCenterArea>
          <div class="flex size-full items-center"></div>
        </HeaderArea>
      </HeaderWithShadow>
    )
  }
})

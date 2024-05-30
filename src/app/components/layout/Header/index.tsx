import { defineComponent } from 'vue'
import HeaderWithShadow from './HeaderWithShadow'
import BluredBackground from './BluredBackground'
import HeaderArea, {
  HeaderLeftButtonArea,
  HeaderLogoArea,
  HeaderCenterArea
} from './HeaderArea'
import AnimatedLogo from './AnimatedLogo'
import HeaderContent from './HeaderContent'

export default defineComponent({
  setup() {
    return () => (
      <HeaderWithShadow>
        <BluredBackground />
        <HeaderArea>
          <HeaderLeftButtonArea />

          <HeaderLogoArea>
            <AnimatedLogo />
          </HeaderLogoArea>

          <HeaderCenterArea>
            <HeaderContent />
          </HeaderCenterArea>
          <div class="flex size-full items-center"></div>
        </HeaderArea>
      </HeaderWithShadow>
    )
  }
})

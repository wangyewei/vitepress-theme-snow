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
import HeaderDrawerButton from './HeaderDrawerButton'
import HeaderMetaInfo from './HeaderMetaInfo'

export default defineComponent({
  setup() {
    return () => (
      <HeaderWithShadow>
        <BluredBackground />
        <HeaderArea>
          <HeaderLeftButtonArea>
            <HeaderDrawerButton />
          </HeaderLeftButtonArea>

          <HeaderLogoArea>
            <AnimatedLogo />
          </HeaderLogoArea>

          <HeaderCenterArea>
            <HeaderContent />
            <HeaderMetaInfo />
          </HeaderCenterArea>
          <div class="flex size-full items-center"></div>
        </HeaderArea>
      </HeaderWithShadow>
    )
  }
})

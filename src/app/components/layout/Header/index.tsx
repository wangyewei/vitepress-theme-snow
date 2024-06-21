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
import { MobileScreen } from '../../common/devices-screen'

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
            <MobileScreen>
              <HeaderMetaInfo />
            </MobileScreen>
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

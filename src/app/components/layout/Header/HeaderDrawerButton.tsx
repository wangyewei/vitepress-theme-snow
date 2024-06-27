import { FC } from 'src/shared'
import { FaSolidMenu } from '../../icons/menu-collection'
import { HeaderActionMenuButton } from './mobile/HeaderActionMenuButton'
import PresentSheet from '../../../../ui/sheet'
import HeaderDrawerContent from './mobile/HeaderDrawerContent'
export const HeaderDrawerButton: FC = () => (
  <PresentSheet>
    {{
      default: () => (
        <HeaderActionMenuButton>
          <FaSolidMenu />
        </HeaderActionMenuButton>
      ),
      content: () => h(<HeaderDrawerContent />)
    }}
  </PresentSheet>
)

export default HeaderDrawerButton

import { MotionButtonBase } from '../../../ui/button'
import { FunctionalComponent } from 'vue'
import {
  useEnumSocialIcon,
  type SocialIconCollection
} from '../icons/social-collection'

type SocialLinkButtonProps = {
  iconBg: string
  href: string
  icon: SocialIconCollection
}

export const SocialLinkButton: FunctionalComponent<SocialLinkButtonProps> = (
  props
) => (
  <MotionButtonBase
    class="flex aspect-square size-10 rounded-full text-2xl text-white center"
    style={{ background: props.iconBg }}
  >
    <a
      target="_blank"
      href={props.href}
      className="flex center"
      rel="noreferrer"
    >
      {useEnumSocialIcon(props.icon)}
    </a>
  </MotionButtonBase>
)

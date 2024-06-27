import { MotionButtonBase } from '../../../ui/button'
import { defineComponent, toRefs } from 'vue'
import {
  useEnumSocialIcon,
  type SocialIconCollection
} from '../icons/social-collection'

type SocialLinkButtonProps = {
  iconBg: string
  href: string
  icon: SocialIconCollection
}

export const SocialLinkButton = defineComponent<SocialLinkButtonProps>(
  (props) => {
    const { icon, iconBg, href } = toRefs(props)

    return () => (
      <MotionButtonBase
        class="flex aspect-square size-10 rounded-full text-2xl text-white center"
        style={{ background: iconBg.value }}
      >
        <a
          target="_blank"
          href={href.value}
          class="flex center"
          rel="noreferrer"
        >
          {h(useEnumSocialIcon(icon.value))}
        </a>
      </MotionButtonBase>
    )
  }
)

// @ts-ignore
SocialLinkButton.props = ['icon', 'iconBg', 'href']

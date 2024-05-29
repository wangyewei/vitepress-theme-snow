import { useData } from 'vitepress'
import { defineComponent, Fragment } from 'vue'
import TwoColumnLayout from '../../common/TwoColumnLayout'
import {
  TextUpTransitionView,
  BottomToUpTransitionView
} from '../../../../ui/transitions'
import { SocialIconCollection } from '../../icons/social-collection'
import { SocialLinkButton } from '../../common/SocialLinkButtons'

export default defineComponent({
  setup() {
    const { page } = useData()
    const { frontmatter } = page.value
    const { title, motto, socials } = frontmatter

    const titleAnimateD =
      title.template.reduce((acc: number, cur: { text: string }) => {
        return acc + (cur.text?.length || 0)
      }, 0) * 50

    return () => (
      <div class="mt-20 min-w-0 max-w-screen overflow-hidden lg:mt-[-4.5rem] lg:h-dvh lg:min-h-[800px]">
        <TwoColumnLayout>
          <Fragment>
            <BottomToUpTransitionView
              delay={200}
              className="group relative text-center leading-[4] lg:text-left [&_*]:inline-block"
            >
              {title.template.map((t: any, i: number) => {
                const { type } = t
                const prevAllTextLenth = title.template
                  .slice(0, i)
                  .reduce((acc: number, cur: any) => {
                    return acc + (cur.text?.length || 0)
                  }, 0)
                // @ts-ignore
                return h(
                  type,
                  { key: i, class: [t.class, 'whitespace-pre'] },
                  t.text && (
                    <TextUpTransitionView
                      text={t.text}
                      eachDelay={0.05}
                      initialDelay={prevAllTextLenth * 0.05}
                    />
                  )
                )
              })}
            </BottomToUpTransitionView>

            <BottomToUpTransitionView
              delay={titleAnimateD + 500}
              className="my-3 text-center lg:text-left"
            >
              {motto}
              <i class="icon-[mingcute--github-line]" />
            </BottomToUpTransitionView>

            <ul class="mx-[60px] mt-8 flex flex-wrap gap-4 center lg:mx-auto lg:mt-28 lg:justify-start">
              {(
                socials as {
                  icon: SocialIconCollection
                  href: string
                  iconBg: string
                }[]
              ).map(({ icon, iconBg, href }, index) => (
                <BottomToUpTransitionView
                  key={icon}
                  delay={index * 100 + titleAnimateD + 500}
                  class="inline-block"
                >
                  <SocialLinkButton icon={icon} iconBg={iconBg} href={href} />
                </BottomToUpTransitionView>
              ))}
            </ul>
          </Fragment>
        </TwoColumnLayout>
      </div>
    )
  }
})

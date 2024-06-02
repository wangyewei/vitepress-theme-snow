import { useData } from 'vitepress'
import { defineComponent, Fragment, onMounted, ref } from 'vue'
import TwoColumnLayout from '../../common/TwoColumnLayout'
import {
  TextUpTransitionView,
  BottomToUpTransitionView
} from '../../../../ui/transitions'
import { SocialIconCollection } from '../../icons/social-collection'
import { FaFillArrowDown } from '../../icons/arrow-collection'
import { SocialLinkButton } from '../../common/SocialLinkButtons'
import { useMotion } from '@vueuse/motion'
import { softBouncePreset } from '../../../../constants/spring'

export default defineComponent({
  setup() {
    const { page, theme } = useData()
    const { frontmatter } = page.value
    const { title, motto, socials } = frontmatter

    const titleAnimateD =
      title.template.reduce((acc: number, cur: { text: string }) => {
        return acc + (cur.text?.length || 0)
      }, 0) * 50

    const sloganRef = ref()
    onMounted(() => {
      useMotion(sloganRef.value, {
        initial: { opacity: 0.0001, y: 50 },
        enter: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 500,
            delay: 500,
            ...softBouncePreset
          }
        }
      })
    })

    return () => (
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

        <div class="lg:size-[300px] size-[200px] mt-24 lg:mt-0">
          <img
            src={theme.value.nav.logo}
            width={300}
            height={300}
            class={[
              'aspect-square rounded-full border border-slate-200 dark:border-neutral-800',
              'rounded-full'
            ]}
          />
        </div>

        <div
          ref={(r: HTMLDivElement) => (sloganRef.value = r)}
          delay={100}
          class={[
            'inset-x-0 bottom-0 mt-12 flex flex-col center lg:absolute lg:mt-0',
            'text-neutral-800/80 center dark:text-neutral-200/80'
          ]}
        >
          <small class="group flex w-[80ch] items-center justify-center text-balance">
            当第一颗卫星飞向大气层外，我们便以为自己终有一日会征服宇宙。
          </small>
          <span class="mt-6 animate-bounce">
            <FaFillArrowDown />
          </span>
        </div>
      </TwoColumnLayout>
    )
  }
})

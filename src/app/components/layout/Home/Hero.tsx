import { useData } from 'vitepress'
import { defineComponent, Fragment } from 'vue'
import { Hero } from 'hero-motion'
import TwoColumnLayout from '../../common/TwoColumnLayout'
import { softBouncePresetpring } from '../../../../constants/spring'

export default defineComponent({
  setup() {
    const { page } = useData()
    const { frontmatter } = page.value
    const { title } = frontmatter
    return () => (
      <div class="mt-20 min-w-0 max-w-screen overflow-hidden lg:mt-[-4.5rem] lg:h-dvh lg:min-h-[800px]">
        <TwoColumnLayout>
          <Fragment>
            <Hero
              class="group relative text-center leading-[4] lg:text-left [&_*]:inline-block"
              transition={{ softBouncePresetpring }}
            >
              {title.template.map((t: any, i: number) => {
                const { type } = t
                const prevAllTextLenth = title.template
                  .slice(0, i)
                  .reduce((acc: number, cur: any) => {
                    return acc + (cur.text?.length || 0)
                  }, 0)
                // @ts-ignore
                return h(type, { key: i, class: t.class }, t.text && t.text)
              })}
            </Hero>
          </Fragment>
        </TwoColumnLayout>
      </div>
    )
  }
})

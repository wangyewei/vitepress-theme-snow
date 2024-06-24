import { defineComponent } from 'vue'
import PageHeaderGradient from './PageHeaderGradient'
import CheckWeatherIsPage from './CheckWeatherIsPage'
import pageTitleFactor from './internal/page-title-factor'
import { Content } from 'vitepress'
import { BottomToUpTransitionView } from '../../../ui/transitions'
import { FooterContent } from './layouts'
import LayoutRightProvider from '../../../providers/LayoutRightProvider'
import { BASIC_MARKDOWN_CLASSNAME } from '../../../constants/markdown-cls'
import OutLine from '../../components/outline/OutLine'
import ArticalRightSide from '../../components/shared/ArticalRightSide'

export default defineComponent(() => {
  const { PageTitle, PageSubTitle } = pageTitleFactor()

  return () => (
    <CheckWeatherIsPage>
      <PageHeaderGradient />

      <div class="relative m-auto mt-[120px] min-h-[300px] w-full max-w-5xl px-2 md:px-6 lg:p-0">
        <div class="relative flex min-h-[120px] w-full">
          <div class="relative w-full min-w-0">
            <article class="prose">
              <header class="mb-8">
                <BottomToUpTransitionView>
                  <PageTitle />
                </BottomToUpTransitionView>
                <BottomToUpTransitionView delay={300}>
                  <PageSubTitle />
                </BottomToUpTransitionView>
              </header>

              <BottomToUpTransitionView delay={600}>
                <Content class={BASIC_MARKDOWN_CLASSNAME} />
              </BottomToUpTransitionView>
            </article>
          </div>
        </div>
        <FooterContent />

        <LayoutRightProvider>
          <ArticalRightSide>
            <OutLine />
          </ArticalRightSide>
        </LayoutRightProvider>
      </div>
    </CheckWeatherIsPage>
  )
})

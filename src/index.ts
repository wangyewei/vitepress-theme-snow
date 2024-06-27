import { Theme } from 'vitepress'
import Layout from './app/Layout'
import { MotionPlugin } from '@vueuse/motion'
import accentThemeStylesInjector from './inject/accent-theme-styles-injector'

export default {
  Layout,
  async enhanceApp({ app, siteData, router }) {
    app.use(MotionPlugin)

    router.onBeforeRouteChange = async () => {
      await accentThemeStylesInjector(siteData.value.themeConfig)
    }
  }
} satisfies Theme

export * from './composables/defineTheme'

import { Theme } from 'vitepress'
import Layout from './app/Layout'
import { MotionPlugin } from '@vueuse/motion'
import accentThemeStylesInjector from './inject/accent-theme-styles-injector'

export default {
  Layout,
  async enhanceApp({ app, siteData }) {
    app.use(MotionPlugin)
    /**
     * `{() => component}` is too ugly to me, so I'd rather give
     * up better perfomance
     */
    app.config.warnHandler = (msg: any) => {
      if (msg.includes('Non-function value encountered for default slot')) {
        return
      }
    }
    await accentThemeStylesInjector(siteData.value.themeConfig)
  }
} satisfies Theme

export * from './composables/defineTheme'

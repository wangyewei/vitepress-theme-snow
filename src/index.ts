import { Theme } from 'vitepress'
import Layout from './app/Layout'
import { MotionPlugin } from '@vueuse/motion'
import './styles/index.css'
import accentThemeStylesInjector from './inject/accentThemeStylesInjector'
export default {
  Layout,
  async enhanceApp({ app }) {
    app.use(MotionPlugin)
    /**
     * `{() => component}` is too ugly to me, so I'd rather give
     * up better perfomance
     */
    app.config.warnHandler = (msg) => {
      if (msg.includes('Non-function value encountered for default slot')) {
        return
      }
    }

    await accentThemeStylesInjector()
  }
} satisfies Theme

export * from './composables/defineTheme'

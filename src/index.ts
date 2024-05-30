import { Theme } from 'vitepress'
import Layout from './app/Layout'
import { MotionPlugin } from '@vueuse/motion'
export default {
  Layout,
  enhanceApp({ app }) {
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
  }
} satisfies Theme

export * from './composables/defineTheme'

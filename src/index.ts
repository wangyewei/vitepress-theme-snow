import { Theme } from 'vitepress'
import Layout from './app/Layout'
import DefaultTheme from 'vitepress/theme'

export default {
  // ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    /**
     * `{() => component}` is too ugly to me, so I'd rather give
     * up better perfomance 
     */
    app.config.warnHandler = msg => {
      if (msg.includes('Non-function value encountered for default slot')) {
        return
      }
    }
  }
} satisfies Theme

export * from './composables/defineTheme'
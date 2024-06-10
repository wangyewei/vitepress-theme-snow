import { defineComponent } from 'vue'
import Header from './components/layout/Header'
import Home from './components/layout/Home'
import { NotFound404 } from './not-found'
import { HeroProvider } from 'hero-motion'
import Footer from './components/layout/Footer'
import { Content } from 'vitepress'

/**
 * TODO:
 *
 * develop a App.tsx
 *
 * create a context ect; to support automaticlly to
 * choose a the correct component.
 */
export default defineComponent({
  setup() {
    return () => (
      <HeroProvider>
        <Header />
        <Home />
        <NotFound404 />
        <Content />
        <Footer />
      </HeroProvider>
    )
  }
})

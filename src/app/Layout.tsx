import { defineComponent } from 'vue'
import Header from './components/layout/Header'
import Home from './components/layout/Home'
import NotFound404 from './not-found'
import { HeroProvider } from 'hero-motion'
import Footer from './components/layout/Footer'
import Modules from './modules/basic-markdown'

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
        <main class="relative z-[1] px-4 pt-[4.5rem] fill-content md:px-0">
          <Home />
          <NotFound404 />
          <Modules />
        </main>
        <Footer />
      </HeroProvider>
    )
  }
})

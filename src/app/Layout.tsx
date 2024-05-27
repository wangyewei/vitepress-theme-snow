import { defineComponent } from 'vue'
import Header from './components/layout/Header'
import Home from './components/layout/Home'
import { HeroProvider } from 'hero-motion'
import './styles/index.css'

export default defineComponent({
  setup() {
    return () => (
      <HeroProvider>
        <Header />
        <Home />
      </HeroProvider>
    )
  }
})

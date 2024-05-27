import { defineComponent } from 'vue'
import Header from './components/layout/Header'
import { HeroProvider } from 'hero-motion'
import './styles/index.css'

export default defineComponent({
  setup() {
    return () => (
      <HeroProvider>
        <Header />
      </HeroProvider>
    )
  }
})

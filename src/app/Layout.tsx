import { defineComponent } from 'vue'
import Header from './components/Header'

import './styles/index.css'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <Header />
      </div>
    )
  }
})

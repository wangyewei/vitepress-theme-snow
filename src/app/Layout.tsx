import { Fragment, defineComponent } from 'vue'
import Header from './components/layout/Header'

import './styles/index.css'

export default defineComponent({
  setup() {
    return () => (
      <Fragment>
        <Header />
      </Fragment>
    )
  }
})

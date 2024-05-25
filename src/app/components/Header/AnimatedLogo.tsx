import { defineComponent, Fragment } from 'vue'
import Avator from './Avator'

export default defineComponent({
  setup() {
    return () => (
      <Fragment>
        <Avator />
      </Fragment>
    )
  }
})

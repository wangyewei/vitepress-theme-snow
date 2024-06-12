import { defineComponent } from 'vue'
import PageHeaderGradient from './PageHeaderGradient'
import CheckWeatherIsPage from './CheckWeatherIsPage'
export default defineComponent(() => () => (
  <CheckWeatherIsPage>
    <PageHeaderGradient />
  </CheckWeatherIsPage>
))

import { softBouncePreset } from '../../constants/spring'
import createMotion from './factor'

export default createMotion({
  initial: {
    translateX: 42,
    opacity: 0.001
  },
  visible: {
    translateX: 0,
    opacity: 1
  },
  preset: softBouncePreset
})

import { softBouncePreset } from '../../constants/spring'
import createMotion from './factor'

export default createMotion({
  initial: {
    y: 50,
    opacity: 0.001
  },
  visible: {
    y: 0,
    opacity: 1
  },
  preset: softBouncePreset
})

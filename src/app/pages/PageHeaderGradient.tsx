import { FC } from '@/shared'
import Portal from '../../ui/portal/Portal'

/**
 * TODO: --gradient should be dynamic based on accent color
 */
export default (() => (
  <Portal>
    <div
      class="page-head-gradient"
      style="--gradient-from: 143 193 139; --gradient-to: 207 228 205;"
    />
  </Portal>
)) satisfies FC

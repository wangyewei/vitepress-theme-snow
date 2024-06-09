import { FC } from '@/shared'
import FooterInfo from './FooterInfo'

export default (() => (
  <footer
    data-hide-print
    class="relative z-[1] mt-32 border-t border-x-uk-separator-opaque-light bg-[var(--root-bg)] py-6 text-base-content/80 dark:border-uk-separator-opaque-dark"
  >
    <div class="px-4 sm:px-8">
      <div class="relative mx-auto max-w-7xl lg:px-8">
        <FooterInfo />
      </div>
    </div>
  </footer>
)) satisfies FC

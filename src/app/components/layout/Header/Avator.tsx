import { useData } from 'vitepress'
import { VPYevTheme } from 'vitepress-theme-yev'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { theme } = useData<VPYevTheme>()

    return () => (
      <div
        role="img"
        class="overflow pointer-events-none relative z-9 select-none cursor-pointer size-[40px]"
      >
        <div class="mask mask-squircle overflow-hidden">
          <img
            src={theme.value.nav.logo}
            alt="avator"
            class="ring-2 ring-slate-200 dark:ring-neutral-800"
          />
        </div>
      </div>
    )
  }
})

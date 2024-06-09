import { useData } from 'vitepress'
import { VPYevTheme } from 'vitepress-theme-yev'
import { defineComponent } from 'vue'
import { BottomToUpTransitionView } from '../../../../../ui/transitions'
import { useEnumHeaderIcons } from '../../../icons/menu-collection'
import { useSheetContext } from '../../../../../ui/sheet/SheetContext'
export default defineComponent({
  setup() {
    const { theme } = useData<VPYevTheme>()
    const { isOpen } = useSheetContext()

    return () => (
      <div class="scrollbar-none mt-12 max-h-[80dvh] w-[90vw] space-y-4 overflow-auto pb-24">
        {theme.value.nav.items?.map((item, index) => (
          <BottomToUpTransitionView key={item.path}>
            <a href={item.path} onClick={() => (isOpen.value = false)}>
              <span class="flex items-center space-x-2 py-2 dark:text-white">
                {item?.icon && useEnumHeaderIcons(item.icon)}
                <h2>{item.title}</h2>
              </span>
            </a>
            {item.children && (
              <ul class="my-2 grid grid-cols-2 gap-2">
                {item.children.map((sub) => (
                  <li key={sub.path}>
                    <a
                      href={sub.path}
                      class="inline-block p-2"
                      onClick={() => (isOpen.value = false)}
                    >
                      {sub.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </BottomToUpTransitionView>
        ))}
      </div>
    )
  }
})

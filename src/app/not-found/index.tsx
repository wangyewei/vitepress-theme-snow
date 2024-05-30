import { useData } from 'vitepress'
import { defineComponent } from 'vue'
import { BottomToUpTransitionView } from '../../ui/transitions'
export const NotFound404 = defineComponent({
  setup() {
    const { page } = useData()
    return () =>
      page.value.title === '404' && (
        <BottomToUpTransitionView class="w-full h-[calc(100vh-4.5rem)] flex flex-col gap-[2rem] center">
          <h1 class="text-3xl"> 404 Not Found</h1>
          <BottomToUpTransitionView class="text-center">
            <small>这里已经是互联网上的最后一页</small>
            <br />
            <small>回归到你的生活中去吧</small>
          </BottomToUpTransitionView>
        </BottomToUpTransitionView>
      )
  }
})

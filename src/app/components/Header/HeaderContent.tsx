import { useData } from 'vitepress'
import { VPYevTheme } from 'vitepress-theme-yev'
import { Fragment, defineComponent, ref, computed } from 'vue'
import MenuPopover from '../common/MenuPopover'

export default defineComponent({
  setup() {
    return () => (
      <Fragment>
        <AnimatedMenu>
          <NavContentDesktop />
        </AnimatedMenu>
      </Fragment>
    )
  }
})

const AnimatedMenu = defineComponent({
  setup(_, { slots }) {
    return () => <div class="duration-100">{slots.default?.()}</div>
  }
})

const NavContentDesktop = defineComponent({
  setup() {
    const { theme } = useData<VPYevTheme>()

    const mouseX = ref(0)
    const mouseY = ref(0)
    const radius = ref(0)
    const handleMouseMove = ({ clientX, clientY, currentTarget }: any) => {
      if (currentTarget) {
        const bounds = currentTarget.getBoundingClientRect()
        mouseX.value = clientX - bounds.left
        mouseY.value = clientY - bounds.top
        radius.value = Math.sqrt(bounds.width ** 2 + bounds.height ** 2) / 2.5
      }
    }

    const background = computed(() => {
      return `radial-gradient(${radius.value}px circle at ${mouseX.value}px ${mouseY.value}px, var(--spotlight-color) 0%, transparent 65%)`
    })

    return () => (
      <nav
        onMousemove={handleMouseMove}
        layout="size"
        class={[
          'relative',
          'rounded-full bg-gradient-to-b from-zinc-50/70 to-white/90',
          'shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md',
          'dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10',
          'group [--spotlight-color:oklch(var(--a)_/_0.12)]',
          'pointer-events-auto duration-200'
        ]}
      >
        <div
          class="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
          style={{ background: background.value }}
        ></div>
        <div class="flex px-4 font-medium text-zinc-800 dark:text-zinc-200">
          {theme.value.nav.items?.map((item) => (
            <NavItems title={item.title} />
          ))}
        </div>
      </nav>
    )
  }
})

const NavItems = defineComponent({
  props: {
    title: String,
    path: String
  },
  setup(props) {
    return () => (
      <MenuPopover>
        <AnimatedItem href={props.path}>
          <span class="mr-2 flex items-center">
            <span>{props.title}</span>
          </span>
        </AnimatedItem>
      </MenuPopover>
    )
  }
})

const AnimatedItem = defineComponent({
  props: {
    href: {
      type: String
    }
  },
  setup(props, { slots }) {
    return () => (
      <a
        href={props.href}
        class={[
          'relative block whitespace-nowrap px-4 py-2 transition',
          'hover:text-accent/80',
          'transition-[padding]'
        ]}
      >
        {slots.default?.()}
      </a>
    )
  }
})

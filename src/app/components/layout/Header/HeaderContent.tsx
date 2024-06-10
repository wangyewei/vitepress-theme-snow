import { useData, useRoute } from 'vitepress'
import { VPYevTheme, VPYevThemeNavItem } from 'vitepress-theme-yev'
import { MenuIconCollection } from '../../icons/menu-collection'
import { Fragment, defineComponent, ref, computed, toRefs, PropType } from 'vue'
import MenuPopover from '../../common/MenuPopover'
import { useEnumHeaderIcons } from '../../icons/menu-collection'
import { Hero } from 'hero-motion'
import { useIsMobile } from '../../../../hooks/useIsMobile'
import { useMenuOpacity } from './hooks/useHeaderBgOpacity'

const HTMLSUFFIX_REGEX = /.html$/g
export default defineComponent({
  setup() {
    const isMobile = useIsMobile() || false

    return () => (
      <Fragment>
        <AnimatedMenu>
          {!isMobile.value ? <NavContentDesktop /> : <Fragment></Fragment>}
        </AnimatedMenu>
      </Fragment>
    )
  }
})

const AnimatedMenu = defineComponent((_, { slots }) => {
  return () => <div class="duration-100">{slots.default?.()}</div>
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

    const opacity = useMenuOpacity()

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
          'pointer-events-auto duration-200',
          opacity.value === 0 && '!bg-none !shadow-none !ring-transparent'
        ]}
      >
        <div
          class="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
          style={{ background: background.value }}
        ></div>
        <div class="flex px-4 font-medium text-zinc-800 dark:text-zinc-200">
          {theme.value.nav.items?.map((item) => {
            const route = useRoute()
            const pathname = route.path.replaceAll(HTMLSUFFIX_REGEX, '')

            const subItemActive = computed(
              () =>
                item.children?.findIndex(
                  (s) => s.path === pathname || pathname.slice(1) === s.path
                ) ?? -1
            )

            const isActive = computed(
              () =>
                pathname === item.path ||
                (pathname.startsWith(item.path || '') && item.path !== '/') ||
                subItemActive.value > -1
            )

            return (
              <NavItems
                title={item.title}
                path={item.path}
                icon={item.icon}
                submenu={item.children}
                isActive={isActive.value}
                subItemActive={item.children?.[subItemActive.value]}
              />
            )
          })}
        </div>
      </nav>
    )
  }
})

const NavItems = defineComponent({
  props: {
    title: String,
    path: String,
    isActive: Boolean,
    icon: String as PropType<MenuIconCollection>,
    submenu: Array as PropType<VPYevThemeNavItem[]>,
    subItemActive: Object as PropType<VPYevThemeNavItem>
  },
  setup(props) {
    const { title, path = '', icon, submenu } = props
    const { isActive, subItemActive } = toRefs(props)

    return () => (
      <MenuPopover submenu={submenu}>
        <AnimatedItem href={path} isActive={isActive.value}>
          {/*
           * TODO: support more types of icon
           * 1. EmenuIconCollection
           * 2. img path
           * 3. custom component
           */}
          <span class="relative flex items-center">
            {isActive.value && (
              <Hero
                as="span"
                layoutId="header-menu-icon"
                class="mr-2 flex items-center"
              >
                {icon && useEnumHeaderIcons(subItemActive.value?.icon || icon)}
              </Hero>
            )}
            <span>{subItemActive.value?.title || title}</span>
          </span>
        </AnimatedItem>
      </MenuPopover>
    )
  }
})

const AnimatedItem = defineComponent({
  props: {
    href: String,
    isActive: Boolean
  },
  setup(props, { slots }) {
    const { href } = props
    const { isActive } = toRefs(props)

    return () => (
      <a
        href={href}
        class={[
          'relative block whitespace-nowrap px-4 py-2 transition',
          [isActive.value ? 'text-accent' : 'hover:text-accent/80'],
          [isActive.value ? 'active' : ''],
          'transition-[padding]',
          'cursor-pointer'
        ]}
      >
        {slots.default?.()}

        {isActive.value && (
          <Hero
            as="span"
            class={[
              'absolute inset-x-1 -bottom-px h-px',
              'bg-gradient-to-r from-accent/0 via-accent/70 to-accent/0'
            ]}
            layoutId="active-nav-item"
          />
        )}
      </a>
    )
  }
})

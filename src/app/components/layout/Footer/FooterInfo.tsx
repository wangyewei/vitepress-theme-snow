import { FC } from '@/shared'
import { useData } from 'vitepress'
import { VPYevTheme } from 'vitepress-theme-yev'
import { defineComponent } from 'vue'
import { FaSolidArrowRight } from '../../icons/arrow-collection'
import { isExternal } from '../../../../shared'

export default (() => (
  <div class="relative">
    <FooterLinkSection />
    <FootterMoreInfo />
  </div>
)) satisfies FC

const FooterLinkSection = defineComponent(() => {
  const { theme } = useData<VPYevTheme>()

  const footerLinks = theme.value.footer.links

  return () => (
    <div class="space-x-0 space-y-3 md:space-x-6 md:space-y-0">
      {footerLinks.map((section) => (
        <div class="flex items-center gap-4 md:inline-flex" key={section.name}>
          <b class="inline-flex items-center font-medium">
            {section.name}
            <FaSolidArrowRight class="ml-2 inline select-none" />
          </b>
          <span class="space-x-4 text-neutral-content/90">
            {section.links.map((link) => (
              <a
                href={link.href}
                class="link-hover link"
                target={isExternal(link.href) ? '_blank' : ''}
              >
                {link.name}
              </a>
            ))}
          </span>
        </div>
      ))}
    </div>
  )
})

const FootterMoreInfo = defineComponent(() => {
  const { theme } = useData<VPYevTheme>()
  const copyright = theme.value.copyright

  return () =>
    !!copyright && (
      <div class="mt-12 space-y-3 text-center md:mt-6 md:text-left">
        <Owner name={copyright?.name} startYear={copyright.startYear} />

        <FooterTemplate />
      </div>
    )
})

const Owner = defineComponent<{ name?: string; startYear?: string }>(
  (props) => {
    return () =>
      !!props.name && (
        <span class="inline-flex gap-[3px]">
          <span>@ {props?.startYear || '2024'} - 至今</span>
          <a href="/">{props.name}</a>
          <span>.</span>
        </span>
      )
  }
)
// TODO:
// defineComponent overload to support a `props` static
// property or pull a requeset or issue to vuejs/core to imporive DX
//
// @ts-ignore
Owner.props = ['name', 'startYear']

/**
 * TODO:
 * footer template recursion render.
 */
const FooterTemplate = defineComponent(() => {
  const { theme } = useData<VPYevTheme>()
  const template = theme.value.footer.template
  return () =>
    !!template &&
    template.map((t) => (
      <span class={t.className}>
        {!!t.text && <span class={t.className}>{t.text}</span>}

        {t?.children?.map((_t) =>
          h(_t.type, { class: _t?.className }, _t.text)
        )}
      </span>
    ))
})

import { MenuIconCollection } from '.'

export type VPYevThemeNavItem = {
  title: string
  path?: string
  children?: VPYevThemeNavItem[]
  icon?: MenuIconCollection
}

export type FooterLink = {
  name: string
  links: {
    name: string
    href: string
  }[]
}

export type FooterTemplateProps = {
  type?: string
  text?: string
  children?: FooterTemplateProps[]
  className?: string
  props?: any
}
export type VPSnowTheme = {
  copyright?: {
    name?: string
    startYear?: string
  }
  nav: {
    logo?: string
    items?: VPYevThemeNavItem[]
  }
  footer: {
    links: FooterLink[]
    template?: FooterTemplateProps[]
  }
}

export const defineTheme = (theme: VPSnowTheme): VPSnowTheme =>
  theme satisfies VPSnowTheme

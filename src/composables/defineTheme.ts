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

export type FooterTemplate = {
  type?: string
  text?: string
  children?: FooterTemplate[]
  className?: string
  props?: any
}
export type VPYevTheme = {
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
    template?: FooterTemplate[]
  }
}

export const defineTheme = (theme: VPYevTheme): VPYevTheme =>
  theme satisfies VPYevTheme

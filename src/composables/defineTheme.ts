import { MenuIconCollection } from '.'

export type VPYevThemeNavItem = {
  title: string
  path?: string
  children?: VPYevThemeNavItem[]
  icon?: MenuIconCollection
}
export type VPYevTheme = {
  nav: {
    logo?: string
    items?: VPYevThemeNavItem[]
  }
}

export const defineTheme = (theme: VPYevTheme): VPYevTheme =>
  theme satisfies VPYevTheme

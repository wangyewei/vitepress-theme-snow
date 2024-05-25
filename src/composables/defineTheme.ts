
export type VPYevThemeNavItem = {
  title: string,
  path?: string,
  children?: VPYevThemeNavItem[]
}
export type VPYevTheme = {
  nav: {
    logo?: string,

    items?: VPYevThemeNavItem[]
  }
}

export const defineTheme = (theme: VPYevTheme): VPYevTheme => (theme satisfies VPYevTheme)
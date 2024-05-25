export type VPYevTheme = {
  nav: {
    logo?: string
  }
}

export const defineTheme = (theme: VPYevTheme): VPYevTheme => (theme satisfies VPYevTheme)
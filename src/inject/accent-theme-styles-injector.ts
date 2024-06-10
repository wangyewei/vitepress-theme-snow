/**
 * TODO:
 *  render dynamic theme accent between dark
 *  and light
 *
 */
import { inBrowser } from 'vitepress'
import { VPYevTheme } from 'vitepress-theme-yev'
// import { hexToOklchString } from '../lib/color-tranformer'
import chroma from 'chroma-js'
import Color from 'colorjs.io'
// import { createPngNoiseBackground } from '../lib/noise'

const hexToOklchString = (hex: string) => {
  return new Color(hex).oklch
}

const accentColorLight = ['#8e44ad', '#1abc9c', '#487eb0', '#00a8ff', '#182C61']

const accentColorDark = ['#F596AA', '#A0A7D4', '#ff7b7b', '#99D8CF', '#838BC6']
const defaultAccentColor = { light: accentColorLight, dark: accentColorDark }
const darkBg = 'rgb(0, 2, 18)'
const lightBg = 'rgb(250, 250, 250)'

/**
 * TODO:
 *  use the custom thme color from theme-config
 */
export default async function (themeConfig: VPYevTheme) {
  if (!inBrowser) return
  const tag = document.createElement('style')
  tag.setAttribute('id', 'accent-color-style')

  const { light, dark } = defaultAccentColor

  const lightColors = light
  const darkColors = dark

  const Length = Math.max(lightColors.length ?? 0, darkColors.length ?? 0)
  const randomSeedRef = (Math.random() * Length) | 0
  const currentAccentColorLRef = lightColors[randomSeedRef]
  const currentAccentColorDRef = darkColors[randomSeedRef]

  const lightOklch = hexToOklchString(currentAccentColorLRef)
  const darkOklch = hexToOklchString(currentAccentColorDRef)

  const [hl, sl, ll] = lightOklch
  const [hd, sd, ld] = darkOklch
  tag.innerHTML = `

  :root {
    --a: ${`${hl} ${sl} ${ll}`};
  }
  
  html {
   
    --root-bg: ${chroma
      .mix(lightBg, currentAccentColorLRef, 0.05, 'rgb')
      .hex()};
    background-color: var(--root-bg) !important;
  }

  @media (prefers-color-scheme: dark) {
    html {
      --a: ${`${hd} ${sd} ${ld}`};
      --root-bg: ${chroma
        .mix(darkBg, currentAccentColorDRef, 0.12, 'rgb')
        .hex()};
    }
  }
  `

  document.head.append(tag)
}

/**
 * TODO:
 *  render dynamic theme accent between dark
 *  and light
 *
 */
import { inBrowser } from 'vitepress'
import { VPYevTheme } from 'vitepress-theme-yev'
import { hexToOklchString } from '../lib/color-tranformer'
import { colorMix } from '../lib/color-mix'
import chroma from 'chroma-js'
// import { createPngNoiseBackground } from '../lib/noise'

const accentColorLight = [
  // 浅葱
  '#33A6B8',

  '#FF6666',
  '#26A69A',
  '#fb7287',
  '#69a6cc'
]

const accentColorDark = [
  // 桃
  '#F596AA',

  '#A0A7D4',
  '#ff7b7b',
  '#99D8CF',
  '#838BC6'
]
const defaultAccentColor = { light: accentColorLight, dark: accentColorDark }
const darkBg = 'rgb(0, 2, 18)'
const lightBg = 'rgb(250, 250, 250)'
export default async function (themeConfig: VPYevTheme) {
  if (!inBrowser) return
  const tag = document.createElement('style')
  tag.setAttribute('id', 'accent-color-style')

  /**
   * TODO:
   *  use the custom thme color from theme-config
   */
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

  // const [lightBgImage, darkBgImage] = await Promise.all([
  //   createPngNoiseBackground(currentAccentColorLRef),
  //   createPngNoiseBackground(currentAccentColorDRef)
  // ])
  tag.innerHTML = `
  html {
    --a: ${`${hl} ${sl} ${ll}`};
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

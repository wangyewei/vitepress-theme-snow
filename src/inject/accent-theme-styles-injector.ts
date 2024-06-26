/**
 * TODO:
 *  render dynamic theme accent between dark
 *  and light
 *
 */
import { inBrowser } from 'vitepress'
import { VPYevTheme } from 'vitepress-theme-yev'
// TODO:
// fix the follow commented functions
// import { hexToOklchString } from '../lib/color-tranformer'
// import { createPngNoiseBackground } from '../lib/noise'
import chroma from 'chroma-js'
import Color from 'colorjs.io'

const hexToOklchString = (hex: string) => {
  return new Color(hex).oklch
}

const accentColorLight = ['#8e44ad', '#1abc9c', '#487eb0', '#00a8ff', '#182C61']
const accentColorDark = ['#FD7272', '#D6A2E8', '#7d5fff', '#3ae374', '#ED4C67']

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
  const originalTag = document.getElementById('accent-color-style')

  if (originalTag) {
    originalTag.remove()
  }

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
    --gradient-from: ${chroma
      .mix(lightBg, currentAccentColorLRef, 0.35, 'rgb')
      .rgb()
      .join(' ')};
    --gradient-to: ${chroma
      .mix(lightBg, currentAccentColorLRef, 0.05, 'rgb')
      .rgb()
      .join(' ')};
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --a: ${`${hd} ${sd} ${ld}`};
    }

    html {
      --root-bg: ${chroma
        .mix(darkBg, currentAccentColorDRef, 0.12, 'rgb')
        .hex()};
      --gradient-from: ${chroma
        .mix(lightBg, currentAccentColorDRef, 0.35, 'rgb')
        .rgb()
        .join(' ')};
      --gradient-to: ${chroma
        .mix(lightBg, currentAccentColorDRef, 0.05, 'rgb')
        .rgb()
        .join(' ')};
    }
  }
  `

  document.head.append(tag)
}

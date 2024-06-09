type RGB = [number, number, number]
type RGBA = [number, number, number, number]
const parseRgbString = (rgb: string): RGB => {
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
  if (!match) {
    throw new Error('Invalid RGB color string')
  }
  return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])]
}

// 将十六进制颜色转换为RGB
const hexToRgb = (hex: string): RGB => {
  hex = hex.replace(/^#/, '')
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((x) => x + x)
      .join('')
  }
  const num = parseInt(hex, 16)
  return [num >> 16, (num >> 8) & 0xff, num & 0xff]
}

// 将RGB转换为十六进制颜色
const rgbToHex = ([r, g, b]: RGB): string => {
  const toHex = (n: number) => n.toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

// 将RGB转换为RGBA字符串
const rgbaToString = ([r, g, b, a]: RGBA): string => {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

// 混合两种RGB颜色
const mixColors = (color1: RGB, color2: RGB, alpha: number): RGB => {
  const r = Math.round(color1[0] * alpha + color2[0] * (1 - alpha))
  const g = Math.round(color1[1] * alpha + color2[1] * (1 - alpha))
  const b = Math.round(color1[2] * alpha + color2[2] * (1 - alpha))
  return [r, g, b]
}

// 混合两种颜色，支持hex和rgb格式
export const colorMix = (color1: string, color2: string, alpha: number) => {
  const rgb1 = color1.startsWith('#')
    ? hexToRgb(color1)
    : parseRgbString(color1)
  const rgb2 = color2.startsWith('#')
    ? hexToRgb(color2)
    : parseRgbString(color2)
  const mixedColor = mixColors(rgb1, rgb2, alpha)

  return {
    hex: () => rgbToHex(mixedColor),
    rgba: () => rgbaToString([...mixedColor, 1] as RGBA)
  }
}

import {
  type RGB,
  type LinearRGB,
  type XYZ,
  type LAB,
  type OKLCH
} from './color'

export const hexToRgb = (hex: string): RGB => {
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

export const rgbToHex = ([r, g, b]: RGB): string => {
  const toHex = (n: number) => n.toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

export const rgbToLinearRgb = (rgb: RGB): LinearRGB => {
  return rgb.map((value) => {
    const normalized = value / 255
    return normalized <= 0.04045
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4)
  }) as LinearRGB
}

export const linearRgbToXyz = (linearRgb: LinearRGB): XYZ => {
  const [r, g, b] = linearRgb
  return [
    r * 0.4124564 + g * 0.3575761 + b * 0.1804375,
    r * 0.2126729 + g * 0.7151522 + b * 0.072175,
    r * 0.0193339 + g * 0.119192 + b * 0.9503041
  ]
}

const xyzToLab = (xyz: XYZ): LAB => {
  const [x, y, z] = xyz.map((value, i) => {
    const ref = [0.95047, 1.0, 1.08883][i]
    const v = value / ref
    return v > 0.008856 ? Math.pow(v, 1 / 3) : 7.787 * v + 16 / 116
  }) as [number, number, number]
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)]
}

export const labToOklch = (lab: LAB): OKLCH => {
  const [L, a, b] = lab
  const C = Math.sqrt(a * a + b * b)
  const h = Math.atan2(b, a) * (180 / Math.PI)
  const H = h < 0 ? h + 360 : h
  return [L, C, H]
}

export const hexToOklchString = (hex: string): OKLCH => {
  const rgb = hexToRgb(hex)
  const linearRgb = rgbToLinearRgb(rgb)
  const xyz = linearRgbToXyz(linearRgb)
  const lab = xyzToLab(xyz)
  return labToOklch(lab)
}

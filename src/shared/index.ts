import { FunctionalComponent } from 'vue'

export type FC<T = any> = FunctionalComponent<T>

export const EXTERNAL_URL_REGEX = /^(?:[a-z]+:|\/\/)/i
export const isExternal = (val: string) => EXTERNAL_URL_REGEX.test(val)

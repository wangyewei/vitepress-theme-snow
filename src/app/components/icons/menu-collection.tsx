import { type FunctionalComponent, type SVGAttributes } from 'vue'

export const FaSolidCircleNotch: FunctionalComponent<SVGAttributes> = (
  props
) => (
  <svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
    <path
      fill="currentColor"
      d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184c-101.689 0-184-82.295-184-184c0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"
    />
  </svg>
)

export const FaSolidDotCircle: FunctionalComponent<SVGAttributes> = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
    <path
      fill="currentColor"
      d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
    />
  </svg>
)

const HeaderIconsObj = {
  FaSolidCircleNotch: <FaSolidCircleNotch />,
  FaSolidDotCircle: <FaSolidDotCircle />
}
export type MenuIconCollection = keyof typeof HeaderIconsObj
export const useEnumHeaderIcons = (icon: MenuIconCollection) =>
  HeaderIconsObj[icon]

import { Plugin } from 'rollup'

const TSX_FILE_REGX = /SocialLinkButtons\.(j|t)sx$/
export default function (): Plugin {
  return {
    name: 'unplugin-auto-function-slot',
    async transform(code, id) {
      if (TSX_FILE_REGX.test(id)) {
        console.log(code)
      }
    }
  }
}

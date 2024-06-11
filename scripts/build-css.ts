import fg from 'fast-glob'
import { copy } from 'fs-extra'

fg.sync('src/styles/**.css')
  .filter((fileName) => fileName !== 'src/styles/tailwind.css')
  .forEach((file) => {
    copy(file, file.replace(/^src\/styles\//, 'dist/styles/'))
  })

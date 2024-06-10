import { defineConfig } from 'tsup'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
const ROOT = fileURLToPath(import.meta.url)
const r = (p: string) => resolve(ROOT, '..', p)
// @ts-ignore

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: r('dist/types/'),
  dts: true,
  external: ['vitepress'],
  noExternal: ['vitepress-plugin-tabs'],
  silent: true
})

import { defineConfig, type RollupOptions } from 'rollup'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolves from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import json from '@rollup/plugin-json'
// @ts-ignore
import vue from 'rollup-plugin-vue'
import jsxUnPlugin from 'unplugin-vue-jsx/rollup'
import inject from 'rollup-plugin-inject'
// import dts from 'rollup-plugin-dts'
// import typescript from 'rollup-plugin-typescript'
import dts from 'rollup-plugin-typescript2'
const ROOT = fileURLToPath(import.meta.url)
const r = (p: string) => resolve(ROOT, '..', p)

const plugins = [
  replace(),
  commonjs(),
  nodeResolves(),
  jsxUnPlugin(),
  esbuild({
    jsxFactory: 'h'
  }),
  json(),
  vue(),
  inject({ h: ['vue', 'h'] }),
  dts({ abortOnError: false })
]

const themeBuild: RollupOptions = {
  input: r('src/index.ts'),
  output: {
    format: 'esm',
    entryFileNames: `[name].js`,
    dir: r('dist/')
  },
  plugins,
  external: [/^vue(\/.+|$)/, 'vitepress']
}

// const typing: RollupOptions = {
//   input: r('src/index.ts'),
//   output: {
//     format: 'esm',
//     file: 'dist/index.d.ts'
//   },
//   plugins: [dts({})]
// }

const config = defineConfig([])

config.push(themeBuild)
// config.push(typing)
export default config

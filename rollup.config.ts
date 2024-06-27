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
import inject from '@rollup/plugin-inject'
import ts from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import autoFunctionSlotPlugin from './unplugin-auto-function-slot'

const ROOT = fileURLToPath(import.meta.url)
const r = (p: string) => resolve(ROOT, '..', p)

const plugins = [
  replace({ preventAssignment: true }),
  commonjs(),
  nodeResolves(),
  jsxUnPlugin(),
  esbuild({
    jsxFactory: 'h'
  }),
  json(),
  vue(),
  inject({ h: ['vue', 'h'] }),
  ts({
    abortOnError: false,
    useTsconfigDeclarationDir: true,
    tsconfig: './tsconfig.rollup.json',
    check: false
  }),
  autoFunctionSlotPlugin()
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

const typing: RollupOptions = {
  input: r('types-temp/index.d.ts'),
  output: {
    format: 'esm',
    file: 'dist/index.d.ts'
  },
  external: [/^vue(\/.+|$)/, 'vitepress'],
  plugins: [dts()]
}

const config = defineConfig([])

config.push(themeBuild)
config.push(typing)

export default config

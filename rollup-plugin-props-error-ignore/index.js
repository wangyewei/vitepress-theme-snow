import { createFilter } from '@rollup/pluginutils'

/**
 * 
 * This JSDoc Gennerated by ChatGPT-4
 * 
 * A Rollup plugin to automatically ignore TypeScript errors related to props declarations
 * by inserting `// @ts-ignore` above lines that match the specified pattern.
 *
 * @param {Object} [options={}] - The plugin options.
 * @param {string|string[]} [options.include] - A pattern or an array of patterns to include specific files.
 * @param {string|string[]} [options.exclude] - A pattern or an array of patterns to exclude specific files.
 * @returns {import('rollup').Plugin} - The configured Rollup plugin.
 */
export default function propsErrorIgnore(options = {}) {
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'ignore-props-error',

    /**
     * Transforms the code by adding `// @ts-ignore` above lines where props are declared,
     * to ignore TypeScript errors in those lines.
     *
     * @param {string} code - The original code of the module.
     * @param {string} id - The path of the module being transformed.
     * @returns {Object|null} The transformed code and source map, or null if no transformation is applied.
     */
    transform(code, id) {
      if (!filter(id)) return null;

      const propsRegex = /(.*)\.props\s*=\s*\[(.*)\];/g
      const newCode = code.replace(propsRegex, (_, p1, p2) => {
        return `// @ts-ignore\n${p1}.props = [${p2}];`
      })

      return {
        code: newCode,
        map: null,
      }
    }
  }
}

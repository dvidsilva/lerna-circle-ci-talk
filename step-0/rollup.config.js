import { babel } from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';

export default {
  input: './src/main.js',
  output: {
    dir: 'dest',
    format: 'esm',
    name: 'bundle',
  },
  plugins: [
    babel({
      babelHelpers: 'runtime'
    }),
    eslint({
      exclude: ['src/styles/**'],
    })
  ]
}
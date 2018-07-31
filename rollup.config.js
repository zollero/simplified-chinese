
// rollup.config.js
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import { uglify } from 'rollup-plugin-uglify';
import { name, main, module } from './package.json'

export default {
  input: './index.ts',
  output: [{
    file: main,
    format: 'es'
  }, {
    file: module,
    name: name,
    format: 'umd'
  }],

  plugins: [
    json(),
    resolve({
      jsnext: true,
      main: true
    }),
    typescript({
      typescript: require('typescript')
    }),
    commonjs({
      include: 'node_modules/**',
      extensions: [ '.js' ],
      ignoreGlobal: false,
      sourceMap: false
    }),
    // uglify()
  ]
}

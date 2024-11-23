import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json' with { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        skip: ['react', 'react-dom'],
      }),
      peerDepsExternal(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.app.json',
        exclude: [
          '**/*.test.tsx',
          '**/*.test.ts',
          '**/*.stories.ts',
          '**/*.stories.tsx',
        ],
      }),
      postcss({ extensions: ['.css'], inject: true, extract: false }),
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  // Todo: Add this back to generate types
  // {
  //   input: 'dist/esm/types/index.d.ts',
  //   output: [{ file: 'dist/index.d.ts', format: 'esm' }],
  //   plugins: [dts()],
  //   external: [/\.css$/],
  // },
];

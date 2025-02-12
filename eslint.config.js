import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import pluginTailwindCSS from 'eslint-plugin-tailwindcss';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import pluginReactPerf from 'eslint-plugin-react-perf';
import pluginReact from 'eslint-plugin-react';
import storybook from 'eslint-plugin-storybook';

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'build', 'coverage', 'public'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      configPrettier,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      tailwindcss: pluginTailwindCSS,
      import: pluginImport,
      'jsx-a11y': pluginJsxA11y,
      prettier: pluginPrettier,
      'react-refresh': reactRefresh,
      'react-perf': pluginReactPerf,
      react: pluginReact,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': 'error',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link', 'RouterLink'],
          aspects: ['invalidHref'],
        },
      ],
      'import/no-duplicates': 'error',
      'import/no-self-import': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '$/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          groups: [
            ['builtin', 'external'],
            ['internal'],
            ['parent', 'sibling', 'index'],
            'unknown',
          ],
        },
      ],
      'import/no-cycle': [
        'error',
        {
          maxDepth: '∞',
          ignoreExternal: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false },
      ],
      'react-perf/jsx-no-new-object-as-prop': 'off',
      'react-perf/jsx-no-new-array-as-prop': 'off',
      'react/jsx-no-target-blank': 'warn',
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
      'react/no-array-index-key': 'warn',
      'react/no-danger': 'warn',
      'react/no-deprecated': 'error',
      'react/no-direct-mutation-state': 'error',
    },
  },
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    rules: {
      'storybook/hierarchy-separator': 'error',
      'storybook/default-exports': 'off',
    },
  },
);

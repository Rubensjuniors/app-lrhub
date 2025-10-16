import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    ignores: ['dist/**', 'node_modules/**', '*.config.js', '*.config.ts', 'cypress/**', 'public/**']
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    plugins: { js }
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      'react-hooks': pluginReactHooks,
      'simple-import-sort': simpleImportSort,
      'react-refresh': pluginReactRefresh
    },

    // === ADICIONAR SETTINGS PARA REACT ===
    settings: {
      react: {
        version: '18.3'
      }
    },

    rules: {
      // === SEM LIB ===
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'react/react-in-jsx-scope': 'off',
      'object-curly-spacing': ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
      'comma-spacing': ['error', { before: false, after: true }],
      'array-bracket-spacing': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'space-before-blocks': ['error', 'always'],

      // === REMOVER ESTA LINHA QUE CAUSA ERRO ===
      indent: ['error', 2],
      'comma-dangle': ['error', 'never'],
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'eol-last': ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/jsx-key': 'error',
      'react/jsx-pascal-case': 'error',
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'prefer-template': 'error',
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-duplicate-imports': 'error',
      'object-shorthand': ['error', 'always'],
      'no-useless-return': 'error',

      // === REACT HOOKS ===
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // === SIMPLE IMPORT SORT  ===
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // === COMPLEXIDADE (NATIVO DO ESLINT) ===
      complexity: ['error', { max: 20 }],
      'max-depth': ['error', 4],
      'max-lines': ['error', { max: 300, skipBlankLines: true }],
      'max-lines-per-function': ['error', { max: 110, skipBlankLines: true }],
      'max-params': ['error', 3],
      'max-nested-callbacks': ['error', 3]
    }
  }
])

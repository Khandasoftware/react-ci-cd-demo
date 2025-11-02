import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js, prettier: prettierPlugin },
    extends: ['js/recommended'],
    rules: {
      // enforce Prettier formatting as errors
      'prettier/prettier': 'error',

      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': ['error'],

      // disable vanilla ESLint unused-vars because TS version handles it
      'no-unused-vars': 'off',

      // custom brace style
      'brace-style': ['error', '1tbs', { allowSingleLine: true }]
    },
    languageOptions: { globals: globals.browser }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime']
])

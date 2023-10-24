module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Группа 1: Импорты из 'react'
          ['^react'],

          // Группа 2: Импорты из 'redux'
          ['^react-redux', '^redux'],

          // Группа 3: Импорты из '@mui/material' (Material-UI)
          ['^@mui'],

          // Группа 4: Импорты из '@' (вашего приложения)
          ['^@'],

          // Группа 5: Импорты из стилей
          ['^.css$'],

          // Группа 6: Импорты из TypeScript файлов
          ['^.ts$'],
        ],
      },
    ],
  },
}

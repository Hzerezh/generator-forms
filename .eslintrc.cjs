module.exports = {
    root: true,
    env: {
      node: true,
      es6: true
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-essential',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser'
    },
    plugins: ['@typescript-eslint'],
    rules: {
      // Здесь можно определить свои правила ESLint
    }
  };
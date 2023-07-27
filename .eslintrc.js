/* eslint-env node */
module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};

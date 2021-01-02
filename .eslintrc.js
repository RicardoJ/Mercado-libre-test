module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
};

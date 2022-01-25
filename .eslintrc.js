module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
  plugins: ['jest'],
  rules: {
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
  },
  ignorePatterns: [],
};

const path = require('path');

const fullPath = path.resolve(__dirname, 'src');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: fullPath,
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};

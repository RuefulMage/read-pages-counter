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
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    'import/no-unresolved': ['error'],
    'import/no-unused-vars': ['off'],
    'no-shadow': 'off',
    'react/react-in-jsx-scope': ['off'],
    'import/extensions': ['off'],
    'react/jsx-props-no-spreading': ['error', { exceptions: ['App', 'Component'] }],
    'no-use-before-define': ['off'],
    'object-curly-newline': ['error', { ImportDeclaration: 'never' }],
    'import/prefer-default-export': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    indent: ['error', 2],
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'never' }],
    'linebreak-style': 0,
    'react/no-unescaped-entities': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 0,
  },
  overrides: [
    {
      files: ['**/redux/**/*Slice.ts'],
      rules: {
        'no-param-reassign': ['error', { props: false }],
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/react',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'react',
    'import',
  ],
  rules: {
    'global-require': 2,
    'comma-spacing': 2,
    'constructor-super': 2,
    'func-call-spacing': 2,
    'dot-notation': [2, { 'allowKeywords': true }],
    'eol-last': 2,
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],

    'no-cond-assign': 0,
    'no-this-before-super': 2,
    'no-trailing-spaces': 2,
    'no-unused-expressions': 2,
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'after-used',
      'varsIgnorePattern': '^_$',
      'argsIgnorePattern': '^_$',
    }],

    'import/no-duplicates': 2,
    'react/display-name': 0,
    'react/no-multi-comp': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/react-in-jsx-scope': 2,
    'react/jsx-wrap-multilines': 2,
    'react/jsx-uses-vars': 2,
    'react/prop-types': [2, {
      'ignore': [
        'children',
        'className',
        'style'
      ]
    }],
  }
}

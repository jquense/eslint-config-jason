const confusingBrowserGlobals = require('confusing-browser-globals')

module.exports = {
  parser: require.resolve('babel-eslint'),
  extends: ['eslint:recommended', 'plugin:import/errors'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
  },
  globals: {
    __DEV__: false,
  },
  plugins: ['import'],
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx'],
      // needed for typescript files importing js, since the configured parser
      // will be ts not babel-eslint for the host file
      [require.resolve('babel-eslint')]: ['.js'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'global-require': 'error',
    'comma-spacing': 'error',
    'constructor-super': 'error',
    'func-call-spacing': 'error',
    'dot-notation': ['error', { allowKeywords: true }],
    'eol-last': 'error',
    // disallow specific globals
    'no-restricted-globals': ['error', ...confusingBrowserGlobals],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    'no-cond-assign': 'off',
    'no-this-before-super': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-expressions': [
      2,
      {
        allowTernary: true,
        allowShortCircuit: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],

    'import/no-duplicates': 'error',
  },

  overrides: [
    {
      files: [
        'tools/**',
        'karma.conf.js',
        'webpack.config.js',
        'test/**',
        '**/__tests__/**',
        '**/__mocks__/**',
      ],
      rules: {
        'global-require': 'off',
        'no-dynamic-require': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],
}

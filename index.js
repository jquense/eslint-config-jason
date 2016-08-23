module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/react",
  ],
  "env": {
    es6: true,
    browser: true,
    node: true,
  },
  "ecmaFeatures": {
    "jsx": true,
    "experimentalObjectRestSpread": true,
  },
  "plugins": [
    "react",
    "import",
  ],
  "rules": {
    "constructor-super": 2,
    "comma-spacing": 2,
    "comma-dangle": 0,
    "semi-spacing": 0,
    "no-this-before-super": 2,
    "dot-notation": [2, { "allowKeywords": true }],
    "no-unused-vars": [2, {
      "vars": "all",
      "args": "after-used",
      "varsIgnorePattern": "^_$",
      "argsIgnorePattern": "^_$",
    }],
    "quotes": [2, "single", {
      "avoidEscape": true,
      "allowTemplateLiterals": true
    }],
    "import/no-duplicates": 2,
    "react/display-name": 0,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 2,
    "react/no-multi-comp": 0,
    "react/prop-types": [2, {
      "ignore": [
        "children",
        "className",
        "style"
      ]
    }],
    "react/react-in-jsx-scope": 2,
    "react/jsx-wrap-multilines": 2,
    "react/jsx-uses-vars": 2,
    "no-trailing-spaces": 2,
    "no-cond-assign": 0,
    "semi": 0,
    "curly": 0,
    "eol-last": 2,
    "no-multi-spaces": 0,
    "no-unused-expressions": 0,
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "key-spacing": 0,
    "consistent-return": 0,
    "no-shadow": 0,
    "no-sequences": 0,
    "no-return-assign": 0,
    "strict": 0
  },
  "settings": {
    "import/resolver": "webpack",
    "import/ignore": [
      "node_modules",
      "\.(scss|less|css|png|gif|jpg)$"
    ]
  }
}

module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb", "react-app"],
  "rules": {
    "eol-last": ["error", "always"],
    "import/no-unresolved": "error",
    "import/no-named-as-default": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "error",
    "indent": [
      "error",
      2,
      {
        "FunctionDeclaration": { "body": 1, "parameters": 1 },
        "FunctionExpression": { "body": 1, "parameters": 1 },
        "SwitchCase": 1
      }
    ],
    "max-len": ["error", 120],
    "multiline-ternary": ["error", "always-multiline"],
    "no-case-declarations": "error",
    "no-console": "error",
    "no-mixed-operators": "error",
    "no-plusplus": "warn",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 0
      }
    ],
    "no-shadow": "warn",
    "operator-linebreak": ["error", "before"],
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    "react/jsx-filename-extension": "off",
    "react/prefer-es6-class": ["error", "always"],
    "react/forbid-prop-types": "warn",
    "react/jsx-closing-bracket-location": [
      "warn",
      {
        "nonEmpty": "line-aligned",
        "selfClosing": "line-aligned"
      }
    ],
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-first-prop-new-line": [
      "error",
      "multiline-multiprop"
    ],
    "react/jsx-pascal-case": "error",
    "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always" }],
    "react/prefer-stateless-function": "error",
    "react/no-unused-prop-types": "error",
    "react/no-array-index-key": "error",
    "react/no-string-refs": "error",
    "react/jsx-wrap-multilines": ["error", { "return": "parens-new-line" }],
    "react/self-closing-comp": "warn",
    "react/jsx-no-bind": "error",
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/aria-role": ["error", {
      "ignoreNonDOM": true
    }],
    "linebreak-style": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          ".storybook/**",
          "stories/**"
        ]
      }
    ]
  },
  "globals": {
    "NODE_ENV": true
  },
  "settings": {
    "import/resolver": process.env.WEBPACK_CONFIG
      ? {
        "webpack": {
          "config": process.env.WEBPACK_CONFIG
        }
      }
      : {
        "node": {
          "moduleDirectory": ["node_modules", "src"]
        }
      }
  }
}

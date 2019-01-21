const path = require("path");

module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "plugins": [
    "babel",
    "import",
    "react"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true,
      "react": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-console": 0,
    "no-debugger": 0,
    "react/no-typos": 1,
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    }
  }
}
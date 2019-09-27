
module.exports = {
  "parser": "@typescript-eslint/parser",
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "plugins": [
    "babel",
    "@typescript-eslint",
    "import",
    "react",
    "react-hooks",
    "jest"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
    {
      "files": ["*.js", "*.jsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": 0
      }
    },
    {
      "files": ["*.ts", ".tsx"],
      "rules": {
        "no-undef": 0
      }
    }
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
    // General Rules
    "no-console": 0,
    "no-debugger": 0,
    "eqeqeq": ["error","always"],
    "spaced-comment": ["error", "always"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "no-var": "error",
    "no-extra-semi": "error",
    "no-unused-vars": "error",
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "jsx-quotes":["error", "prefer-double"],
    "no-mixed-spaces-and-tabs": "error",

    // React rules
    "react/no-typos": 1,
    "react/no-unescaped-entities": 1,
    "react/prop-types": 0,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",

    // React-hooks rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": 0,
    
    // Typescript rules
    "@typescript-eslint/interface-name-prefix": ["warn", { "prefixWithI": "always" }],
    "@typescript-eslint/no-explicit-any": 0,

    // Jest rules
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect",
    },
    "import/resolver": {
      "babel-module": {},
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  }
}
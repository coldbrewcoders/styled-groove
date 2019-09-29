
module.exports = {

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Disable Typescript diagnostics in test files (test files purposely break TS rules)
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  },

  rootDir: ".",

  // Match these as files to run with jest
  testMatch: [
    "<rootDir>/__tests__/jest/*.test.*",
  ],

  // Tell jest to use ts-jest with .ts and .tsx files
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest"
  }

};

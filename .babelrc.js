const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-object-rest-spread",
  "@babel/plugin-transform-object-set-prototype-of-to-assign",
  "@babel/plugin-transform-regenerator",
  "@babel/plugin-proposal-export-default-from",
  "babel-plugin-styled-components"
];
const presets =  [
  [
    "@babel/preset-env",
    {
      "useBuiltIns": "entry"
    }
  ],
  "@babel/react"
];

module.exports = { presets, plugins };

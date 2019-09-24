const plugins = [
  "@babel/plugin-proposal-nullish-coalescing-operator",
  "@babel/plugin-proposal-optional-chaining",
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-object-rest-spread",
  "@babel/plugin-transform-object-set-prototype-of-to-assign",
  "@babel/plugin-transform-regenerator",
  "@babel/plugin-proposal-export-default-from",
  "babel-plugin-styled-components",
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ["."]
    }
    
  ]
];

const presets =  [
  [
    "@babel/preset-env",
    {
      "useBuiltIns": "entry",
      "corejs": 3
    }
  ],
  "@babel/react"
];

module.exports = { presets, plugins };

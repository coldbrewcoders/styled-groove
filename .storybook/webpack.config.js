// Export a function. Accept the base config as the only param.
module.exports = async ({ config }) => {
  // Set unambiguous for the sourceType to be able to use export in storybook
  config.module.rules[0].use[0].options.sourceType = "unambiguous";

  return config;
};
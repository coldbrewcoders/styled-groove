import { MEDIA_STRATEGIES, DEFAULT_MEDIA_SIZES_UP, DEFAULT_MEDIA_SIZES_DOWN } from "src/definitions";


// ** Default Config Parameters **/
const defaultConfig = {
  ignoreMediaMixins: false,
  mediaStrategy: MEDIA_STRATEGIES.UP,
  mediaSizes: DEFAULT_MEDIA_SIZES_UP
};


/** Helper Methods **/

// Validate custom media width ranges
const areMediaWidthRangesValid = ({ xl, lg, md, sm, xs }, mediaStrategy) => {

  // Check that outer boundaries are one px apart (sm -> xs for down media strategy, lg -> xl for up media strategy)
  if(mediaStrategy === MEDIA_STRATEGIES.UP) {
    if((sm - xs) !== 1) {
      console.warn(`Styled-Groove: Invalid config.mediaSizes, using defaults. For up media strategy, sm must be equal to xs + 1. Passed values: sm -> ${sm}, xs -> ${xs}.`);
      return false;
    }
  }
  else if(mediaStrategy === MEDIA_STRATEGIES.DOWN) {
    if((xl - lg) !== 1) {
      console.warn(`Styled-Groove: Invalid custom config.mediaSizes, using defaults. For down media strategy, lg must be equal to xl - 1. Passed values: lg -> ${lg}, xl -> ${xl}.`);
      return false;
    }
  }

  // Check that sizes are in proper order
  if((xl > lg) && (lg > md) && (md > sm) && (sm > xs)) {
    return true;
  }
  else {
    console.warn(`Styled-Groove: Invalid custom config.mediaSizes, using defaults. The following condition was violated: (xl > lg > md > sm > xs). Passed values: xl -> ${xl}, lg -> ${lg}, md -> ${md}, sm -> ${sm}, xs -> ${xs}.`);
    return false;
  }

}



/**
 * Config Options:
 *
 *  ignoreMediaMixins: bool (default false)
 *    - If set to true, media mixin prop check will be skipped (optimization if not using media mixins)
 *
 *  mediaStrategy: "up", "down" (default up)
 *    - Change direction of media strategy from up to down
 *
 *  mediaSizes: obj -> { xl, lg, md, sm, xs }
 *    - will override default media width ranges
 *
 **/

export const processConfigObject = (config) => {

  // If no config parameter passed, return default config values
  if(typeof config === "undefined") {
    return defaultConfig;
  }

  // If config parameter was passed, but is not an object
  if(typeof config !== "object" || Array.isArray(config)) {
    console.warn(`Styled-Groove: config parameter must be an object, ignoring invalid config param. Passed config parameter: ${config}.`);
    return defaultConfig;
  }

  // Get keys of config object
  const configKeys = Object.keys(config)

  // Short-circuit if no config props passed
  if(configKeys.length === 0) return defaultConfig;

  // Check if we are ignoring media mixins. (If this is the case, the other config params do not matter)
  if(Object.prototype.hasOwnProperty.call(config, "ignoreMediaMixins")) {
    if(config.ignoreMediaMixins === true) return { ignoreMediaMixins: true, mediaStrategy: null, mediaSizes: {} };
  }

  // Store custom config properties
  let customConfig = {};

  // Check if custom media strategy is passed
  if(Object.prototype.hasOwnProperty.call(config, "mediaStrategy")) {

    if(config.mediaStrategy === MEDIA_STRATEGIES.DOWN) {
      // If config overrides default media strategy, save in custom config object
      customConfig.mediaStrategy = MEDIA_STRATEGIES.DOWN;
      customConfig.mediaSizes = DEFAULT_MEDIA_SIZES_DOWN;
    }
    else if(config.mediaStrategy !== MEDIA_STRATEGIES.UP) {
      // Warn user of invalid media strategy value passed
      console.warn(`Styled-Groove: Invalid mediaStrategy value passed in config object, must be 'up' or 'down'. Passed value: ${config.mediaStrategy}.`);
    }
  }

  // Check if custom media sizes passed
  if(Object.prototype.hasOwnProperty.call(config, "mediaSizes")) {

    // Check if custom media styles param is an object
    if(typeof config.mediaSizes !== "object") {
      console.warn("Styled-Groove: Invalid mediaSizes value passed in config object. Value must be an object.");
    }
    else {

      // Get list of keys from passed custom media sizes config
      const configMediaSizesKeys = Object.keys(config.mediaSizes);

      // Define list of allowed keys for config.mediaSizes
      const allowedKeys = ["xl", "lg", "md", "sm", "xs"];

      let isConfigMediaSizesValid = true;

      // Iterate through keys of custom media sizes config
      for(let i = 0; i < configMediaSizesKeys.length; i++) {

        // Get current key
        const currentKey = configMediaSizesKeys[i];

        // Check that config.mediaSizes only contains valid keys
        if(!allowedKeys.includes(currentKey)) {
          console.warn(`Styled-Groove: Invalid mediaSizes value passed in config object. Object keys can only be 'xl', 'lg', 'md', 'sm' and 'xm'. Invalid object key: ${currentKey}.`);
          isConfigMediaSizesValid = false;
          break;
        }

      }

      if(isConfigMediaSizesValid) {

        // Find current set media sizes and media strategy
        const currentMediaSizes = customConfig.mediaSizes || defaultConfig.mediaSizes;
        const currentMediaStrategy = customConfig.mediaStrategy || defaultConfig.mediaStrategy;

        // Create new media sizes by overriding current sizes with custom sizes
        const overriddenMediaSizes = {
          ...currentMediaSizes,
          ...config.mediaSizes
        };

        // Check that overridden media width breakpoints are valid
        if(areMediaWidthRangesValid(overriddenMediaSizes, currentMediaStrategy)) {

          // Add overridden media sizes to custom config object
          customConfig = {
            ...customConfig,
            mediaSizes: overriddenMediaSizes
          };

        }

      }
    }
  }

  // return validated config object;
  return {
    ...defaultConfig,
    ...customConfig
  };

}
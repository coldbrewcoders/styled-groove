import isPlainObject from "is-plain-object";

// Definitions
import { DEFAULT_MEDIA_BREAKPOINTS_UP, DEFAULT_MEDIA_BREAKPOINTS_DOWN } from "./definitions";

// Enums
import { MEDIA_STRATEGIES, MEDIA_BREAKPOINT_KEYS } from "./definitions";

// Types
import { MediaBreakpointKey } from "./definitions";

// Interfaces
import { IMediaBreakpoints, IConfig, ICustomMediaBreakpointSize, ICustomMediaBreakpoints, ICustomConfig } from "./definitions";


// Default config object
const defaultConfig: IConfig = {
  ignoreMediaMixins: false,
  mediaStrategy: MEDIA_STRATEGIES.UP,
  mediaBreakpoints: DEFAULT_MEDIA_BREAKPOINTS_UP
};

// Validate custom media breakpoints
const areMediaWidthRangesValid = ({ xl, lg, md, sm, xs }: IMediaBreakpoints, mediaStrategy: MEDIA_STRATEGIES): boolean => {

  // Check that outer boundaries are one px apart (sm -> xs for down media strategy, lg -> xl for up media strategy)
  if(mediaStrategy === MEDIA_STRATEGIES.UP) {
    if((sm - xs) !== 1) {
      console.warn(`Styled-Groove: Invalid custom config.mediaBreakpoints passed, using default breakpoints. For up media strategy, sm must be equal to xs + 1. Passed values: sm -> ${sm}, xs -> ${xs}.`);
      return false;
    }
  }
  else {
    // Using down media strategy
    if((xl - lg) !== 1) {
      console.warn(`Styled-Groove: Invalid custom config.mediaBreakpoints passed, using default breakpoints. For down media strategy, lg must be equal to xl - 1. Passed values: lg -> ${lg}, xl -> ${xl}.`);
      return false;
    }
  }

  // Check that breakpoint sizes are in proper order
  if((xl > lg) && (lg > md) && (md > sm) && (sm > xs)) {
    return true;
  }
  else {
    console.warn(`Styled-Groove: Invalid custom config.mediaBreakpoints passed, using default breakpoints. The following condition was violated: (xl > lg > md > sm > xs). Passed values: xl -> ${xl}, lg -> ${lg}, md -> ${md}, sm -> ${sm}, xs -> ${xs}.`);
    return false;
  }
}

// Process config object
export const processConfigObject = (config: ICustomConfig): ICustomConfig | IConfig => {

  // If no config parameter passed, return default config values
  if(typeof config === "undefined") {
    return defaultConfig;
  }

  // If config parameter was passed, but is not an object
  if(!isPlainObject(config)) {
    console.warn(`Styled-Groove: config parameter must be an object, ignoring invalid config object and using default settings. Passed config parameter: ${config}.`);
    return defaultConfig;
  }

  // Get keys of config object
  const configKeys: string[] = Object.keys(config);

  // Short-circuit if no config props passed
  if(configKeys.length === 0) return defaultConfig;

  // Check if we are ignoring media mixins. (If this is the case, the other config params do not matter)
  if(Object.prototype.hasOwnProperty.call(config, "ignoreMediaMixins")) {
    if(config.ignoreMediaMixins === true) return { ignoreMediaMixins: true, mediaStrategy: undefined, mediaBreakpoints: undefined };
  }

  // Store custom config properties here
  let customConfig: ICustomConfig = {};

  // Check if custom media strategy is passed
  if(Object.prototype.hasOwnProperty.call(config, "mediaStrategy")) {

    if(config.mediaStrategy === MEDIA_STRATEGIES.DOWN) {
      // If config overrides default media strategy, save in custom config object
      customConfig.mediaStrategy = MEDIA_STRATEGIES.DOWN;
      customConfig.mediaBreakpoints = DEFAULT_MEDIA_BREAKPOINTS_DOWN;
    }
    else if (config.mediaStrategy === MEDIA_STRATEGIES.UP) {
      // If config overrides default media strategy, save in custom config object
      customConfig.mediaStrategy = MEDIA_STRATEGIES.UP;
      customConfig.mediaBreakpoints = DEFAULT_MEDIA_BREAKPOINTS_UP;
    }
    else {
      // Warn user of invalid media strategy value passed
      console.warn(`Styled-Groove: Invalid mediaStrategy value passed in config object, must be 'up' or 'down'. Using 'up' media strategy as default. Passed value: ${config.mediaStrategy}.`);
    }

  }

  // Check if passed custom media breakpoints are valid
  if(Object.prototype.hasOwnProperty.call(config, "mediaBreakpoints")) {

    // Check if custom config media breakpoints param is an object
    if(!isPlainObject(config.mediaBreakpoints)) {
      console.warn("Styled-Groove: Invalid mediaBreakpoints value passed in config object. Value must be an object, using default media breakpoint sizes.");
    }
    else {

      // Get list of keys from passed custom media breakpoints config
      const configMediaBreakpointKeys: string[] = Object.keys(config.mediaBreakpoints as ICustomMediaBreakpoints);

      // Keep track if passed custom config has valid media breakpoints
      let isConfigMediaBreakpointsValid = true;

      // Iterate through keys of custom media breakpoints
      for(let i = 0; i < configMediaBreakpointKeys.length; i++) {

        // Get current media breakpoint key
        const currentMediaBreakpointKey: MediaBreakpointKey | string = configMediaBreakpointKeys[i];

        // Check that config.mediaBreakpoints only contains valid keys
        if(!Object.values(MEDIA_BREAKPOINT_KEYS).includes(currentMediaBreakpointKey as MediaBreakpointKey)) {
          console.warn(`Styled-Groove: Invalid mediaBreakpoints value passed in config object. Object keys can only be 'xl', 'lg', 'md', 'sm' and 'xs'. Invalid object key: ${currentMediaBreakpointKey}.`);
          isConfigMediaBreakpointsValid = false;
          break;
        }

        // Get value for current media breakpoint key
        const currentBreakpointValue: number | undefined = (config.mediaBreakpoints as ICustomMediaBreakpointSize)[currentMediaBreakpointKey];

        // Check that config.mediaBreakpoints has numerical values for each key
        if(typeof currentBreakpointValue !== "number" || isNaN(currentBreakpointValue)) {
          console.warn(`Styled-Groove: mediaBreakpoints object has invalid value. All values must be numbers, using default breakpoints. Invalid object property ${currentMediaBreakpointKey} had value of ${currentBreakpointValue}`);
          isConfigMediaBreakpointsValid = false;
          break;
        }

      }

      if(isConfigMediaBreakpointsValid) {

        // Find current set media breakpoints and media strategy
        const currentMediaBreakpoints: ICustomMediaBreakpoints = customConfig.mediaBreakpoints || defaultConfig.mediaBreakpoints;
        const currentMediaStrategy: MEDIA_STRATEGIES = customConfig.mediaStrategy || defaultConfig.mediaStrategy;

        // Create new media breakpoints by overriding current breakpoints with custom breakpoint values
        const overriddenMediaBreakpoints = {
          ...currentMediaBreakpoints,
          ...config.mediaBreakpoints
        };

        // Check that overridden media width breakpoints are valid
        if(areMediaWidthRangesValid(overriddenMediaBreakpoints as IMediaBreakpoints, currentMediaStrategy)) {

          // Apply overridden media breakpoints to custom config object
          customConfig = {
            ...customConfig,
            mediaBreakpoints: overriddenMediaBreakpoints
          };

        }

      }
    }
  }

  // Return validated config object;
  return {
    ...defaultConfig,
    ...customConfig
  };

}
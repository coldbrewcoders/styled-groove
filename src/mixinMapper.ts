import { css, FlattenSimpleInterpolation } from "styled-components";
import isPlainObject from "is-plain-object";

// Mixins
import { styleMixins, getMediaMixinsUp, getMediaMixinsDown } from "./mixins";

// Utils
import { processConfigObject } from "./utils";

// Definitions
import { MEDIA_STRATEGIES, DEFAULT_MEDIA_SIZES_UP } from "./definitions";

// Interfaces
import { IConfig } from "./definitions";

// Types
import { mixin } from "./definitions";


/* Loop through the props and apply them to the mixins to return list of applicable mixins */
const mixinMapperIgnoreMediaProps = (props: any = {}): FlattenSimpleInterpolation | undefined => {
  
  // Get all prop keys
  const propKeys: string[] = Object.keys(props);

  // If no passed props, short-circuit
  if (propKeys.length === 0) return;

  // List for storage of all applied styles
  const stylesList: FlattenSimpleInterpolation[] = []; // TODO: Check that this is correct

  // Iterate through all props and find associated key-value style to apply (if applicable)
  propKeys.forEach((propKey: string) => {

    // Get prop value
    const propValue: any = props[propKey];

    // If falsy prop value found that isn't 'number: 0', short-circuit
    if(!propValue && propValue !== 0) return;

    // Check if prop key matches a style mixin prop
    const mixinProp: mixin = styleMixins[propKey];

    // If prop key matches style mixin prop, apply value
    if(mixinProp) stylesList.push(mixinProp(propValue));

  });

  // Return list of mixinProps
  return css`${stylesList}`;
}

export const mixinMapper = (props: any = {}, config: IConfig) => {

  // Short-circuit if props isn't strictly an object
  if (!isPlainObject(props)) return;

  // Get all prop keys from component
  const propKeys: string[] = Object.keys(props);

  // If no passed props, short-circuit
  if (propKeys.length === 0) return;

  // Process config object to get configurable values
  const { ignoreMediaMixins, mediaStrategy, mediaSizes = DEFAULT_MEDIA_SIZES_UP }: IConfig = processConfigObject(config);

  // Get media mixin object based on up or down media strategy (default is media strategy is up)
  const mediaMixins = (mediaStrategy === MEDIA_STRATEGIES.UP) ? getMediaMixinsUp(mediaSizes) : getMediaMixinsDown(mediaSizes);

  // List for storage of all applied styles
  const stylesList: FlattenSimpleInterpolation[] = []; // TODO: Check that this is correct
  const mediaStylesMap = new Map<string, FlattenSimpleInterpolation>(); // TODO: Is this better than an obj

  // Iterate through all props and find associated key-value style to apply (if applicable)
  propKeys.forEach((propKey: string) => {

    // Get prop value
    const propValue: any = props[propKey];

    // If falsy prop value found that isn't 'number: 0', short-circuit
    if (!propValue && propValue !== 0) return;

    // Check if prop key matches a style mixin prop
    const mixinProp: mixin = styleMixins[propKey];

    // If prop key matches a style mixin prop...
    if (mixinProp) {
      // Calculate CSS for style mixin prop and add value to styles list
      stylesList.push(mixinProp(propValue));
      return;
    }

    // If config object specifies to ignore media mixins, short circuit
    if (ignoreMediaMixins) return;

    // Check if prop key matches media mixin prop
    const mediaProp: (literals: TemplateStringsArray, ...placeholders: any[]) => FlattenSimpleInterpolation | undefined = mediaMixins[propKey];

    // If prop key matches a media mixin prop...
    if (mediaProp) {
      // Short-circuit if not media prop value isn't strictly an object or if object is empty
      if(!isPlainObject(propValue) || Object.keys(propValue).length === 0) return;

      // Calculate CSS for all style mixin props within the media mixin prop value and add to media styles map
      const mediaPropStylesList: FlattenSimpleInterpolation | undefined = mixinMapperIgnoreMediaProps(propValue);

      // Short-circuit if no valid style mixin props found within media prop
      if (mediaPropStylesList && mediaPropStylesList.length === 0) return;

      mediaStylesMap[propKey] = mediaProp`${mediaPropStylesList}`;
    }
    
  });

  // If not ignoring media mixins and component contained media mixin props...
  if (!ignoreMediaMixins && Object.keys(mediaStylesMap).length) {

    /** NOTE: Media styles must be applied in a specific order to work properly due to the nature of CSS media queries.
     *  For up media strategy, apply styles in xs -> xl order (default media strategy)
     *  For down media strategy, apply styles in xl -> xs order
    **/

    if (mediaStrategy === MEDIA_STRATEGIES.DOWN) {

      // Apply media styles to styles list (down media strategy)
      if (mediaStylesMap.get("_xl")) stylesList.push(mediaStylesMap.get("_xl")); // FIXME: Figure this out
      mediaStylesMap._lg && stylesList.push(mediaStylesMap._lg);
      mediaStylesMap._md && stylesList.push(mediaStylesMap._md);
      mediaStylesMap._sm && stylesList.push(mediaStylesMap._sm);
      mediaStylesMap._xs && stylesList.push(mediaStylesMap._xs);

    }
    else {

      // Apply media styles to styles list (up media strategy)
      mediaStylesMap._xs && stylesList.push(mediaStylesMap._xs);
      mediaStylesMap._sm && stylesList.push(mediaStylesMap._sm);
      mediaStylesMap._md && stylesList.push(mediaStylesMap._md);
      mediaStylesMap._lg && stylesList.push(mediaStylesMap._lg);
      mediaStylesMap._xl && stylesList.push(mediaStylesMap._xl);

    }

  }

  // Return all applicable styles as injected css
  return css`${stylesList}`;
};

export const curriedMixinMapper = (config: IConfig) => (props: any) => mixinMapper(props, config);
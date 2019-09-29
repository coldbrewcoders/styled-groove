import { css, FlattenSimpleInterpolation } from "styled-components";
import isPlainObject from "is-plain-object";

// Mixins
import { styleMixins, getMediaMixinsUp, getMediaMixinsDown } from "./mixins";

// Utils
import { processConfigObject } from "./utils";

// Definitions
import { MEDIA_STRATEGIES, DEFAULT_MEDIA_BREAKPOINTS_UP } from "./definitions";

// Interfaces
import { IMediaBreakpoints, IMediaStylesMap, IComponentProps, IConfig, ICustomConfig, IMediaMixins } from "./definitions";

// Types
import { Mixin, MediaMixin, ComponentPropValue } from "./definitions";


const mixinMapperIgnoreMediaProps = (props: IComponentProps): FlattenSimpleInterpolation | undefined => {
  
  // Get all prop keys
  const propKeys: string[] = Object.keys(props);

  // List for storage of all applied styles
  const stylesList: FlattenSimpleInterpolation[] = [];

  // Iterate through all props and find associated key-value style to apply (if applicable)
  propKeys.forEach((propKey: string) => {

    // Get prop value
    const propValue: any = props[propKey];

    // If falsy prop value found that isn't 'number: 0', short-circuit
    if(!propValue && propValue !== 0) return;

    // Check if prop key matches a style mixin prop
    const mixinProp: Mixin = styleMixins[propKey];

    // If prop key matches style mixin prop, apply value
    if(mixinProp) stylesList.push(mixinProp(propValue));

  });

  // Return list of mixinProps
  return css`${stylesList}`;
}

export const mixinMapper = (props?: IComponentProps, config?: ICustomConfig): FlattenSimpleInterpolation | undefined => {

  // Short-circuit if props isn't strictly an object
  if (!isPlainObject(props)) return;

  // Get all prop keys from component
  const propKeys: string[] = Object.keys(props as IComponentProps);

  // Short-circuit if props object is empty
  if(propKeys.length === 0) return;

  // Process config object to get configurable values
  const { ignoreMediaMixins, mediaStrategy, mediaBreakpoints = DEFAULT_MEDIA_BREAKPOINTS_UP }: ICustomConfig | IConfig = processConfigObject(config as ICustomConfig);

  // Get media mixin object based on up or down media strategy (default is media strategy is up)
  const mediaMixins: IMediaMixins = (mediaStrategy === MEDIA_STRATEGIES.UP) ? getMediaMixinsUp(mediaBreakpoints as IMediaBreakpoints) : getMediaMixinsDown(mediaBreakpoints as IMediaBreakpoints);

  // List for storage of all applied styles
  const stylesList: FlattenSimpleInterpolation[] = [];
  const mediaStylesMap: IMediaStylesMap = {};
 
  // Iterate through all props and find associated key-value style to apply (if applicable)
  propKeys.forEach((propKey: string) => {

    // Get prop value
    const propValue: ComponentPropValue = (props as IComponentProps)[propKey];

    // If falsy prop value found that isn't 'number: 0', short-circuit
    if (!propValue && propValue !== 0) return;

    // Check if prop key matches a style mixin prop
    const mixinProp: Mixin = styleMixins[propKey];

    // If prop key matches a style mixin prop...
    if (mixinProp) {
      // Calculate CSS for style mixin prop and add value to styles list
      stylesList.push(mixinProp(String(propValue)));
      return;
    }

    // If config object specifies to ignore media mixins, short circuit
    if (ignoreMediaMixins) return;

    // Check if prop key matches media mixin prop
    const mediaProp: MediaMixin | undefined = mediaMixins[propKey];

    // If prop key matches a media mixin prop...
    if (mediaProp) {
      // Short-circuit if not media prop value isn't strictly an object or if object is empty
      if(!isPlainObject(propValue) || Object.keys(propValue).length === 0) return;

      // Calculate CSS for all style mixin props within the media mixin prop value and add to media styles map
      const mediaPropStylesList = mixinMapperIgnoreMediaProps(propValue as IComponentProps);

      // Short-circuit if no valid style mixin props found within media prop
      if(mediaPropStylesList && mediaPropStylesList.length === 0) return;

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
      mediaStylesMap._xl && stylesList.push(mediaStylesMap._xl);
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

export const curriedMixinMapper = (config: ICustomConfig) => (props: IComponentProps): any => mixinMapper(props, config);
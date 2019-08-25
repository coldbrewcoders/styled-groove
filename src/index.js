import { css } from "styled-components";


const mixins = {

  // Display
  display: (value) => css`display: ${value};`,
  position: (value) => css`position: ${value};`,
  float: (value) => css`float: ${value};`,
  overflow: (value) => css`overflow: ${value};`,
  overflowX: (value) => css`overflow-x: ${value};`,
  overflowY: (value) => css`overflow-y: ${value};`,


  // Sizing
  height: (value) => css`height: ${value};`,
  width: (value) => css`width: ${value};`,
  isTall: () => css`height: 100%;`,
  isWide: () => css`width: 100%;`,
  minHeight: (value) => css`min-height: ${value};`,
  minWidth: (value) => css`min-width: ${value};`,
  maxHeight: (value) => css`max-height: ${value};`,
  maxWidth: (value) => css`max-width: ${value};`,


  // Margin
  margin: (value) => css`margin: ${value};`,
  marginTop: (value) => css`margin-top: ${value};`,
  marginBottom: (value) => css`margin-bottom: ${value};`,
  marginLeft: (value) => css`margin-left: ${value};`,
  marginRight: (value) => css`margin-right: ${value};`,
  marginX: (value) => css`
    margin-left: ${value};
    margin-right: ${value}; `,
  marginY: (value) => css`
    margin-top: ${value};
    margin-bottom: ${value}; `,


  // Padding
  padding: (value) => css`padding: ${value};`,
  paddingTop: (value) => css`padding-top: ${value};`,
  paddingBottom: (value) => css`padding-bottom: ${value};`,
  paddingLeft: (value) => css`padding-left: ${value};`,
  paddingRight: (value) => css`padding-right: ${value};`,
  paddingX: (value) => css`
    padding-left: ${value};
    padding-right: ${value}; `,
  paddingY: (value) => css`
    padding-top: ${value};
    padding-bottom: ${value}; `,


  // Positioning
  top: (value) => css`top: ${value};`,
  bottom: (value) => css`bottom: ${value};`,
  left: (value) => css`left: ${value};`,
  right: (value) => css`right: ${value};`,
  fill: () => css` position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;`,


  // Typography
  color: (value) => css`color: ${value};`,
  fontSize: (value) => css`font-size: ${value};`,
  fontWeight: (value) => css`font-weight: ${value};`,
  textAlign: (value) => css`text-align: ${value};`,
  textDecoration: (value) => css`text-decoration: ${value};`,
  hoverColor: (value) => css`&&{&:hover{color: ${value};}}`,
  lineHeight: (value) => css`line-height: ${value};`,
  letterSpacing: (value) => css`letter-spacing: ${value};`,
  light: () => css`font-weight: 300;`,
  bold: () => css`font-weight: bold;`,
  underline: () => css`text-decoration: underline;`,
  normal: () => css`font-weight: normal;`,
  ellipsis: () => css`text-overflow: ellipsis;`,
  noWrap: () => css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`,


  // Border
  border: (value) => css`border: ${value};`,
  borderTop: (value) => css`border-top: ${value};`,
  borderBottom: (value) => css`border-bottom: ${value};`,
  borderRight: (value) => css`border-right: ${value};`,
  borderLeft: (value) => css`border-left: ${value};`,
  borderColor: (value) => css`border-color: ${value};`,
  borderRadius: (value) => css`border-radius: ${value};`,


  // Background
  background: (value) => css`background: ${value};`,
  backgroundPosition: (value) => css`background-position: ${value};`,
  backgroundSize: (value) => css`background-size: ${value};`,
  backgroundImage: (value) => css`background-image: url(${value});`,
  backgroundColor: (value) => css`background-color: ${value};`,
  backgroundCover: () => css`background-size: cover;`,


  // Flex https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  isFlex: () => css`
    display: flex;
    flex-wrap: wrap;`,
  direction: (value) => css`flex-direction: ${value};`,
  wrap: (value) => css`flex-wrap: ${value};`,

  justifyContent: (value) => css`justify-content: ${value};`,
  spaced: () => css`justify-content: space-between;`,
  around: () => css`justify-content: space-around;`,
  alignItems: (value) => css`align-items: ${value};`,
  alignContent: (value) => css`align-content: ${value};`,

  order: (value) => css`order: ${value};`,
  grow: (value) => css`flex-grow: ${value};`,
  shrink: (value) => css`flex-shrink: ${value};`,
  basis: (value) => css`flex-basis: ${value};`,
  alignSelf: (value) => css`align-self: ${value};`,


  // Centering
  centered: () => css`
    align-content: center;
    align-items: center;
    justify-content: center; `,
  hCentered: () => css`justify-content: center;`,
  vCentered: () => css`align-items: center;`,

  // Misc
  cursor: (value) => css`cursor: ${value};`,
  hide: () => css`display: none !important;`,
  whiteSpace: (value) => css`white-space: ${value};`,
  zIndex: (value) => css`z-index: ${value};`,
};

// Default media size ranges for media up strategy
const DEFAULT_MEDIA_UP_SIZES = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 575
};

const mediaUpMixins = {
  _xs: (...args) => css`
    @media (max-width: ${DEFAULT_MEDIA_UP_SIZES.xs}px) {
      ${css(...args)}
    }
  `,
  _sm: (...args) => css`
    @media (min-width: ${DEFAULT_MEDIA_UP_SIZES.sm}px) {
      ${css(...args)}
    }
  `,
  _md: (...args) => css`
    @media (min-width: ${DEFAULT_MEDIA_UP_SIZES.md}px) {
      ${css(...args)}
    }
  `,
  _lg: (...args) => css`
    @media (min-width: ${DEFAULT_MEDIA_UP_SIZES.lg}px) {
      ${css(...args)}
    }
  `,
  _xl: (...args) => css`
    @media (min-width: ${DEFAULT_MEDIA_UP_SIZES.xl}px) {
      ${css(...args)}
    }
  `,    
};

// Default media size ranges for media down strategy
const DEFAULT_MEDIA_DOWN_SIZES = {
  xl: 1200,
  lg: 1199,
  md: 991,
  sm: 767,
  xs: 575
};

const mediaDownMixins = {
  _xs: (...args) => css`
    @media (max-width: ${DEFAULT_MEDIA_DOWN_SIZES.xs}px) {
      ${css(...args)}
    }
  `,
  _sm: (...args) => css`
    @media (max-width: ${DEFAULT_MEDIA_DOWN_SIZES.sm}px) {
      ${css(...args)}
    }
  `,
  _md: (...args) => css`
    @media (max-width: ${DEFAULT_MEDIA_DOWN_SIZES.md}px) {
      ${css(...args)}
    }
  `,
  _lg: (...args) => css`
    @media (max-width: ${DEFAULT_MEDIA_DOWN_SIZES.lg}px) {
      ${css(...args)}
    }
  `,
  _xl: (...args) => css`
    @media (min-width: ${DEFAULT_MEDIA_DOWN_SIZES.xl}px) {
      ${css(...args)}
    }
  `,  
}


const mixinMapperIgnoreMediaProps = (props = {}) => {
  
  // Get all prop keys
  const propKeys = Object.keys(props);

  // If no passed props, short-circuit
  if(propKeys.length === 0) return;

  // List for storage of all applied styles
  const stylesList = [];

  // Iterate through all props and find associated key-value style to apply (if applicable)
  propKeys.forEach((propKey) => {

    // Get prop value
    const propValue = props[propKey];

    // If falsy prop value found that isn't 'number: 0', short-circuit
    if(!propValue && propValue !== 0) return;

    // Check if prop key matches a style mixin prop
    const mixinProp = mixins[propKey];

    // If prop key matches style mixin prop, apply value
    if(mixinProp) {
      stylesList.push(mixinProp(propValue));
    }

  });

  // Return all applicable styles as injected css
  return css`${stylesList}`;
}

const mixinMapper = (props = {}, isMediaStrategyDown = false) => {

  // Get all prop keys
  const propKeys = Object.keys(props);

  // If no passed props, short-circuit
  if(propKeys.length === 0) return;
  
  // Get media mixin object based on up or down media strategy (default is media strategy is up)
  const mediaMixins = isMediaStrategyDown ? mediaDownMixins : mediaUpMixins;

  // List for storage of all applied styles
  const stylesList = [];
  const mediaStylesMap = {};

  // Iterate through all props and find associated key-value style to apply (if applicable)
  propKeys.forEach((propKey) => {

    // Short-circuit if prop key is for a built in component prop
    if(propKey === "children" || propKey === "forwardedComponent" || propKey === "forwardedRef") return;

    // Get prop value
    const propValue = props[propKey];

    // If falsy prop value found that isn't 'number: 0', short-circuit
    if(!propValue && propValue !== 0) return;

    // Check if prop key matches a style mixin prop
    const mixinProp = mixins[propKey];

    // If prop key matches a style mixin prop...
    if(mixinProp) {
      // Calculate CSS for style mixin prop and add value to styles list
      stylesList.push(mixinProp(propValue));
      return;
    }

    // Check if prop key matches media mixin prop
    const mediaProp = mediaMixins[propKey];

    // If prop key matches a media mixin prop...
    if(mediaProp) {
      // Calculate CSS for all style mixin props within the media mixin prop value and add to media styles map
      mediaStylesMap[propKey] = mediaProp`${mixinMapperIgnoreMediaProps(propValue)}`;
    }
    
  });

  // If component contained media mixin props...
  if(Object.keys(mediaStylesMap).length) {

    /** NOTE: Media styles must be applied in a specific order to work properly due to the nature of CSS media queries.
     *  For up media strategy, apply styles in xs -> xl order (default media strategy)
     *  For down media strategy, apply styles in xl -> xs order
    **/

    if(isMediaStrategyDown) {

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

// Aka 'applyGroove'
export default mixinMapper;
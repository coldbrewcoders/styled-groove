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
}

const mediaDown = {
  xs: (...args) => css`
    @media (max-width: 575px) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (max-width: 992px) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (max-width: 1200px) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,  
}

const mediaUp = {
  xs: (...args) => css`
    @media (max-width: 575px) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (min-width: 576px) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (min-width: 992px) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,    
};

const mediaUpMixins = {
  _xlUp: mediaUp.xl,
  _lgUp: mediaUp.lg,
  _mdUp: mediaUp.md,
  _smUp: mediaUp.sm,
  _xsUp: mediaUp.xs,
};

const mediaDownMixins = {
  _xlDown: mediaDown.xl,
  _lgDown: mediaDown.lg,
  _mdDown: mediaDown.md,
  _smDown: mediaDown.sm,
  _xsDown: mediaDown.xs,
};

const defaultMediaMixin = (reverseMedia) => {
  return {
    _xl: reverseMedia ? mediaUpMixins.xl : mediaDownMixins.xl,
    _lg: reverseMedia ? mediaUpMixins.lfg : mediaDownMixins.lfg,
    _md: reverseMedia ? mediaUpMixins.md : mediaDownMixins.md,
    _sm: reverseMedia ? mediaUpMixins.sm : mediaDownMixins.sm,
    _xs: reverseMedia ? mediaUpMixins.xs : mediaDownMixins.xs,
  };
};

const mixinMapper = (props, reverseMedia) => {

  let stylesArray = [];

  // Loop through all props and find associate key-value style to apply
  Object.keys(props).forEach((propKey) => {

    const mixinProp = mixins[propKey];
    const mediaProp = defaultMediaMixin(reverseMedia)[propKey];
    const mediaUpProp = mediaUpMixins[propKey];
    const mediaDownProp = mediaDownMixins[propKey];
    const propValue = props[propKey];

    // find mixin property that matches key
    if(mixinProp){
      stylesArray.push(mixinProp(propValue));
    } else if(mediaProp || mediaUpProp || mediaDownProp){
      const currentMediaMixin = mediaProp || mediaUpProp || mediaDownProp;
      stylesArray.push(currentMediaMixin`${mixinMapper(propValue)}`);
    }
  });

  // Return all applicable styles
  return css`${stylesArray}`;
};

export default mixinMapper;
import { css } from "styled-components";


export const styleMixins = {

  // Display
  display: (value) => css`display: ${value};`,
  position: (value) => css`position: ${value};`,
  float: (value) => css`float: ${value};`,
  clear: (value) => css`clear: ${value};`,
  overflow: (value) => css`overflow: ${value};`,
  overflowX: (value) => css`overflow-x: ${value};`,
  overflowY: (value) => css`overflow-y: ${value};`,
  visibility: (value) => css`visibility: ${value};`,
  zIndex: (value) => css`z-index: ${value};`,

  // Sizing
  height: (value) => css`height: ${value};`,
  width: (value) => css`width: ${value};`,
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
    margin-right: ${value};
  `,
  marginY: (value) => css`
    margin-top: ${value};
    margin-bottom: ${value};
  `,

  // Padding
  padding: (value) => css`padding: ${value};`,
  paddingTop: (value) => css`padding-top: ${value};`,
  paddingBottom: (value) => css`padding-bottom: ${value};`,
  paddingLeft: (value) => css`padding-left: ${value};`,
  paddingRight: (value) => css`padding-right: ${value};`,
  paddingX: (value) => css`
    padding-left: ${value};
    padding-right: ${value};
  `,
  paddingY: (value) => css`
    padding-top: ${value};
    padding-bottom: ${value};
  `,

  // Positioning
  top: (value) => css`top: ${value};`,
  bottom: (value) => css`bottom: ${value};`,
  left: (value) => css`left: ${value};`,
  right: (value) => css`right: ${value};`,

  // Typography
  color: (value) => css`color: ${value};`,
  fontSize: (value) => css`font-size: ${value};`,
  fontWeight: (value) => css`font-weight: ${value};`,
  fontFamily: (value) => css`font-family: ${value};`,
  fontStyle: (value) => css`font-style: ${value};`,
  textAlign: (value) => css`text-align: ${value};`,
  textDecoration: (value) => css`text-decoration: ${value};`,
  hoverColor: (value) => css`&&{&:hover{color: ${value};}}`,
  lineHeight: (value) => css`line-height: ${value};`,
  letterSpacing: (value) => css`letter-spacing: ${value};`,
  hyphens: (value) => css`hyphens: ${value};`,
  textOverflow: (value) => css`text-overflow: ${value};`,
  textShadow: (value) => css`text-shadow: ${value};`,
  textTransform: (value) => css`text-transform: ${value};`,
  light: () => css`font-weight: 300;`,
  bold: () => css`font-weight: bold;`,
  underline: () => css`text-decoration: underline;`,
  normal: () => css`font-weight: normal;`,
  ellipsis: () => css`text-overflow: ellipsis;`,
  noWrap: () => css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,

  // Border
  border: (value) => css`border: ${value};`,
  borderTop: (value) => css`border-top: ${value};`,
  borderBottom: (value) => css`border-bottom: ${value};`,
  borderRight: (value) => css`border-right: ${value};`,
  borderLeft: (value) => css`border-left: ${value};`,
  borderColor: (value) => css`border-color: ${value};`,
  borderRadius: (value) => css`border-radius: ${value};`,
  borderTopLeftRadius: (value) => css`border-top-left-radius: ${value};`,
  borderTopRightRadius: (value) => css`border-top-right-radius: ${value};`,
  borderBottomRightRadius: (value) => css`border-bottom-right-radius: ${value};`,
  borderBottomLeftRadius: (value) => css`border-bottom-left-radius: ${value};`,
  borderRightRadius: (value) => css`
    border-top-right-radius: ${value};
    border-bottom-right-radius: ${value};
  `,
  borderLeftRadius: (value) => css`
    border-top-left-radius: ${value};
    border-bottom-left-radius: ${value};
  `,
  borderTopRadius: (value) => css`
    border-top-left-radius: ${value};
    border-top-right-radius: ${value};
  `,
  borderBottomRadius: (value) => css`
    border-bottom-left-radius: ${value};
    border-bottom-right-radius: ${value};
  `,
  boxShadow: (value) => css`box-shadow: ${value};`,

  // Background
  background: (value) => css`background: ${value};`,
  backgroundPosition: (value) => css`background-position: ${value};`,
  backgroundRepeat: (value) => css`background-repeat: ${value};`,
  backgroundSize: (value) => css`background-size: ${value};`,
  backgroundImage: (value) => css`background-image: url(${value});`,
  backgroundColor: (value) => css`background-color: ${value};`,
  backgroundColorHover: (value) => css`&&{&:hover{background-color: ${value};}}`,
  backgroundAttachment: (value) => css`background-attachment: ${value};`,
  backgroundClip: (value) => css`background-clip: ${value};`,
  backgroundOrigin: (value) => css`background-origin: ${value};`,
  objectFit: (value) => css`object-fit: ${value};`,

  // Flex
  isFlex: () => css`display: flex;`,
  flex: (value) => css`flex: ${value};`,
  flexDirection: (value) => css`flex-direction: ${value};`,
  flexWrap: (value) => css`flex-wrap: ${value};`,
  justifyContent: (value) => css`justify-content: ${value};`,
  alignItems: (value) => css`align-items: ${value};`,
  alignContent: (value) => css`align-content: ${value};`,
  alignSelf: (value) => css`align-self: ${value};`,
  order: (value) => css`order: ${value};`,
  flexGrow: (value) => css`flex-grow: ${value};`,
  flexShrink: (value) => css`flex-shrink: ${value};`,
  flexBasis: (value) => css`flex-basis: ${value};`,

  // Misc
  cursor: (value) => css`cursor: ${value};`,
  direction: (value) => css`direction: ${value};`,
  opacity: (value) => css`opacity: ${value};`,
  overflowWrap: (value) => css`overflow-wrap: ${value};`,
  pointerEvents: (value) => css`pointer-events: ${value};`,
  transform: (value) => css`transform: ${value};`,
  transition: (value) => css`transition: ${value};`,
  transitionDelay: (value) => css`transition-delay: ${value};`,
  userSelect: (value) => css`user-select: ${value};`,
  whiteSpace: (value) => css`white-space: ${value};`,
  wordSpacing: (value) => css`word-spacing: ${value};`,
  wordWrap: (value) => css`word-wrap: ${value};`
};

export const getMediaMixinsUp = ({ xl, lg, md, sm, xs }) => ({
  _xs: (...args) => css`
    @media (max-width: ${xs}px) {
      ${css(...args)}
    }
  `,
  _sm: (...args) => css`
    @media (min-width: ${sm}px) {
      ${css(...args)}
    }
  `,
  _md: (...args) => css`
    @media (min-width: ${md}px) {
      ${css(...args)}
    }
  `,
  _lg: (...args) => css`
    @media (min-width: ${lg}px) {
      ${css(...args)}
    }
  `,
  _xl: (...args) => css`
    @media (min-width: ${xl}px) {
      ${css(...args)}
    }
  `,    
});

export const getMediaMixinsDown = ({ xl, lg, md, sm, xs }) => ({
  _xs: (...args) => css`
    @media (max-width: ${xs}px) {
      ${css(...args)}
    }
  `,
  _sm: (...args) => css`
    @media (max-width: ${sm}px) {
      ${css(...args)}
    }
  `,
  _md: (...args) => css`
    @media (max-width: ${md}px) {
      ${css(...args)}
    }
  `,
  _lg: (...args) => css`
    @media (max-width: ${lg}px) {
      ${css(...args)}
    }
  `,
  _xl: (...args) => css`
    @media (min-width: ${xl}px) {
      ${css(...args)}
    }
  `,  
});
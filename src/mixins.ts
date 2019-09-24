import { css } from "styled-components";

// Definition
import { IMediaBreakpoints, IStyleMixins } from "./definitions";

const styleMixins: IStyleMixins = {

  // Display
  display: (value: string) => css`display: ${value};`,
  position: (value: string) => css`position: ${value};`,
  float: (value: string) => css`float: ${value};`,
  clear: (value: string) => css`clear: ${value};`,
  overflow: (value: string) => css`overflow: ${value};`,
  overflowX: (value: string) => css`overflow-x: ${value};`,
  overflowY: (value: string) => css`overflow-y: ${value};`,
  visibility: (value: string) => css`visibility: ${value};`,
  zIndex: (value: string) => css`z-index: ${value};`,

  // Sizing
  height: (value: string) => css`height: ${value};`,
  width: (value: string) => css`width: ${value};`,
  minHeight: (value: string) => css`min-height: ${value};`,
  minWidth: (value: string) => css`min-width: ${value};`,
  maxHeight: (value: string) => css`max-height: ${value};`,
  maxWidth: (value: string) => css`max-width: ${value};`,

  // Margin
  margin: (value: string) => css`margin: ${value};`,
  marginTop: (value: string) => css`margin-top: ${value};`,
  marginBottom: (value: string) => css`margin-bottom: ${value};`,
  marginLeft: (value: string) => css`margin-left: ${value};`,
  marginRight: (value: string) => css`margin-right: ${value};`,
  marginX: (value: string) => css`
    margin-left: ${value};
    margin-right: ${value};
  `,
  marginY: (value: string) => css`
    margin-top: ${value};
    margin-bottom: ${value};
  `,

  // Padding
  padding: (value: string) => css`padding: ${value};`,
  paddingTop: (value: string) => css`padding-top: ${value};`,
  paddingBottom: (value: string) => css`padding-bottom: ${value};`,
  paddingLeft: (value: string) => css`padding-left: ${value};`,
  paddingRight: (value: string) => css`padding-right: ${value};`,
  paddingX: (value: string) => css`
    padding-left: ${value};
    padding-right: ${value};
  `,
  paddingY: (value: string) => css`
    padding-top: ${value};
    padding-bottom: ${value};
  `,

  // Positioning
  top: (value: string) => css`top: ${value};`,
  bottom: (value: string) => css`bottom: ${value};`,
  left: (value: string) => css`left: ${value};`,
  right: (value: string) => css`right: ${value};`,

  // Typography
  color: (value: string) => css`color: ${value};`,
  fontSize: (value: string) => css`font-size: ${value};`,
  fontWeight: (value: string) => css`font-weight: ${value};`,
  fontFamily: (value: string) => css`font-family: ${value};`,
  fontStyle: (value: string) => css`font-style: ${value};`,
  textAlign: (value: string) => css`text-align: ${value};`,
  textDecoration: (value: string) => css`text-decoration: ${value};`,
  hoverColor: (value: string) => css`&&{&:hover{color: ${value};}}`,
  lineHeight: (value: string) => css`line-height: ${value};`,
  letterSpacing: (value: string) => css`letter-spacing: ${value};`,
  hyphens: (value: string) => css`hyphens: ${value};`,
  textOverflow: (value: string) => css`text-overflow: ${value};`,
  textShadow: (value: string) => css`text-shadow: ${value};`,
  textTransform: (value: string) => css`text-transform: ${value};`,
  light: () => css`font-weight: 300;`,
  bold: () => css`font-weight: bold;`,

  // Border
  border: (value: string) => css`border: ${value};`,
  borderTop: (value: string) => css`border-top: ${value};`,
  borderBottom: (value: string) => css`border-bottom: ${value};`,
  borderRight: (value: string) => css`border-right: ${value};`,
  borderLeft: (value: string) => css`border-left: ${value};`,
  borderColor: (value: string) => css`border-color: ${value};`,
  borderRadius: (value: string) => css`border-radius: ${value};`,
  borderTopLeftRadius: (value: string) => css`border-top-left-radius: ${value};`,
  borderTopRightRadius: (value: string) => css`border-top-right-radius: ${value};`,
  borderBottomRightRadius: (value: string) => css`border-bottom-right-radius: ${value};`,
  borderBottomLeftRadius: (value: string) => css`border-bottom-left-radius: ${value};`,
  borderRightRadius: (value: string) => css`
    border-top-right-radius: ${value};
    border-bottom-right-radius: ${value};
  `,
  borderLeftRadius: (value: string) => css`
    border-top-left-radius: ${value};
    border-bottom-left-radius: ${value};
  `,
  borderTopRadius: (value: string) => css`
    border-top-left-radius: ${value};
    border-top-right-radius: ${value};
  `,
  borderBottomRadius: (value: string) => css`
    border-bottom-left-radius: ${value};
    border-bottom-right-radius: ${value};
  `,
  boxShadow: (value: string) => css`box-shadow: ${value};`,

  // Background
  background: (value: string) => css`background: ${value};`,
  backgroundPosition: (value: string) => css`background-position: ${value};`,
  backgroundRepeat: (value: string) => css`background-repeat: ${value};`,
  backgroundSize: (value: string) => css`background-size: ${value};`,
  backgroundImage: (value: string) => css`background-image: url(${value});`,
  backgroundColor: (value: string) => css`background-color: ${value};`,
  backgroundColorHover: (value: string) => css`&&{&:hover{background-color: ${value};}}`,
  backgroundAttachment: (value: string) => css`background-attachment: ${value};`,
  backgroundClip: (value: string) => css`background-clip: ${value};`,
  backgroundOrigin: (value: string) => css`background-origin: ${value};`,
  objectFit: (value: string) => css`object-fit: ${value};`,

  // Flex
  flex: (value: string) => css`flex: ${value};`,
  flexDirection: (value: string) => css`flex-direction: ${value};`,
  flexWrap: (value: string) => css`flex-wrap: ${value};`,
  justifyContent: (value: string) => css`justify-content: ${value};`,
  alignItems: (value: string) => css`align-items: ${value};`,
  alignContent: (value: string) => css`align-content: ${value};`,
  alignSelf: (value: string) => css`align-self: ${value};`,
  order: (value: string) => css`order: ${value};`,
  flexGrow: (value: string) => css`flex-grow: ${value};`,
  flexShrink: (value: string) => css`flex-shrink: ${value};`,
  flexBasis: (value: string) => css`flex-basis: ${value};`,

  // Misc
  cursor: (value: string) => css`cursor: ${value};`,
  direction: (value: string) => css`direction: ${value};`,
  opacity: (value: string) => css`opacity: ${value};`,
  overflowWrap: (value: string) => css`overflow-wrap: ${value};`,
  pointerEvents: (value: string) => css`pointer-events: ${value};`,
  transform: (value: string) => css`transform: ${value};`,
  transition: (value: string) => css`transition: ${value};`,
  transitionDelay: (value: string) => css`transition-delay: ${value};`,
  userSelect: (value: string) => css`user-select: ${value};`,
  whiteSpace: (value: string) => css`white-space: ${value};`,
  wordSpacing: (value: string) => css`word-spacing: ${value};`,
  wordWrap: (value: string) => css`word-wrap: ${value};`
};

// The signature for a tagged template should be (literals: TemplateStringsArray, ...placeholders: any[]) => string 
// Where literals are the strings in the template and placeholders are the variable values.
// https://stackoverflow.com/questions/49397538/typing-the-css-function-in-styled-components

// TODO: Make these dynamic to be able to have _xxl, etc.
const getMediaMixinsUp = ({ xl, lg, md, sm, xs }: IMediaBreakpoints) => ({
  _xs: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (max-width: ${xs}px) {
      ${css(literals, ...placeholders)}
    }
  `,
  _sm: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (min-width: ${sm}px) {
      ${css(literals, ...placeholders)}
    }
  `,
  _md: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (min-width: ${md}px) {
      ${css(literals, ...placeholders)}
    }
  `,
  _lg: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (min-width: ${lg}px) {
      ${css(literals, ...placeholders)}
    }
  `,
  _xl: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (min-width: ${xl}px) {
      ${css(literals, ...placeholders)}
    }
  `,
});

const getMediaMixinsDown = ({ xl, lg, md, sm, xs }: IMediaBreakpoints) => ({
  _xs: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (max-width: ${xs}px) {
      ${css(literals, ...placeholders)}
    }
  `,
  _sm: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (max-width: ${sm}px) {
      ${css(literals, ...placeholders)}
    }
  `,
  _md: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (max-width: ${md}px) {
      ${css(literals, ...placeholders)}
    }
  `,
  _lg: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (max-width: ${lg}px) {
      ${css(literals, ...placeholders)}
    }
  `,
  _xl: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (min-width: ${xl}px) {
      ${css(literals, ...placeholders)}
    }
  `,  
});

export { styleMixins, getMediaMixinsUp, getMediaMixinsDown };
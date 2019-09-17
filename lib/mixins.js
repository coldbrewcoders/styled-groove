"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.styleMixins = {
    // Display
    display: (value) => styled_components_1.css `display: ${value};`,
    position: (value) => styled_components_1.css `position: ${value};`,
    float: (value) => styled_components_1.css `float: ${value};`,
    clear: (value) => styled_components_1.css `clear: ${value};`,
    overflow: (value) => styled_components_1.css `overflow: ${value};`,
    overflowX: (value) => styled_components_1.css `overflow-x: ${value};`,
    overflowY: (value) => styled_components_1.css `overflow-y: ${value};`,
    visibility: (value) => styled_components_1.css `visibility: ${value};`,
    zIndex: (value) => styled_components_1.css `z-index: ${value};`,
    // Sizing
    height: (value) => styled_components_1.css `height: ${value};`,
    width: (value) => styled_components_1.css `width: ${value};`,
    minHeight: (value) => styled_components_1.css `min-height: ${value};`,
    minWidth: (value) => styled_components_1.css `min-width: ${value};`,
    maxHeight: (value) => styled_components_1.css `max-height: ${value};`,
    maxWidth: (value) => styled_components_1.css `max-width: ${value};`,
    // Margin
    margin: (value) => styled_components_1.css `margin: ${value};`,
    marginTop: (value) => styled_components_1.css `margin-top: ${value};`,
    marginBottom: (value) => styled_components_1.css `margin-bottom: ${value};`,
    marginLeft: (value) => styled_components_1.css `margin-left: ${value};`,
    marginRight: (value) => styled_components_1.css `margin-right: ${value};`,
    marginX: (value) => styled_components_1.css `
    margin-left: ${value};
    margin-right: ${value};
  `,
    marginY: (value) => styled_components_1.css `
    margin-top: ${value};
    margin-bottom: ${value};
  `,
    // Padding
    padding: (value) => styled_components_1.css `padding: ${value};`,
    paddingTop: (value) => styled_components_1.css `padding-top: ${value};`,
    paddingBottom: (value) => styled_components_1.css `padding-bottom: ${value};`,
    paddingLeft: (value) => styled_components_1.css `padding-left: ${value};`,
    paddingRight: (value) => styled_components_1.css `padding-right: ${value};`,
    paddingX: (value) => styled_components_1.css `
    padding-left: ${value};
    padding-right: ${value};
  `,
    paddingY: (value) => styled_components_1.css `
    padding-top: ${value};
    padding-bottom: ${value};
  `,
    // Positioning
    top: (value) => styled_components_1.css `top: ${value};`,
    bottom: (value) => styled_components_1.css `bottom: ${value};`,
    left: (value) => styled_components_1.css `left: ${value};`,
    right: (value) => styled_components_1.css `right: ${value};`,
    // Typography
    color: (value) => styled_components_1.css `color: ${value};`,
    fontSize: (value) => styled_components_1.css `font-size: ${value};`,
    fontWeight: (value) => styled_components_1.css `font-weight: ${value};`,
    fontFamily: (value) => styled_components_1.css `font-family: ${value};`,
    fontStyle: (value) => styled_components_1.css `font-style: ${value};`,
    textAlign: (value) => styled_components_1.css `text-align: ${value};`,
    textDecoration: (value) => styled_components_1.css `text-decoration: ${value};`,
    hoverColor: (value) => styled_components_1.css `&&{&:hover{color: ${value};}}`,
    lineHeight: (value) => styled_components_1.css `line-height: ${value};`,
    letterSpacing: (value) => styled_components_1.css `letter-spacing: ${value};`,
    hyphens: (value) => styled_components_1.css `hyphens: ${value};`,
    textOverflow: (value) => styled_components_1.css `text-overflow: ${value};`,
    textShadow: (value) => styled_components_1.css `text-shadow: ${value};`,
    textTransform: (value) => styled_components_1.css `text-transform: ${value};`,
    light: () => styled_components_1.css `font-weight: 300;`,
    bold: () => styled_components_1.css `font-weight: bold;`,
    underline: () => styled_components_1.css `text-decoration: underline;`,
    normal: () => styled_components_1.css `font-weight: normal;`,
    ellipsis: () => styled_components_1.css `text-overflow: ellipsis;`,
    noWrap: () => styled_components_1.css `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
    // Border
    border: (value) => styled_components_1.css `border: ${value};`,
    borderTop: (value) => styled_components_1.css `border-top: ${value};`,
    borderBottom: (value) => styled_components_1.css `border-bottom: ${value};`,
    borderRight: (value) => styled_components_1.css `border-right: ${value};`,
    borderLeft: (value) => styled_components_1.css `border-left: ${value};`,
    borderColor: (value) => styled_components_1.css `border-color: ${value};`,
    borderRadius: (value) => styled_components_1.css `border-radius: ${value};`,
    borderTopLeftRadius: (value) => styled_components_1.css `border-top-left-radius: ${value};`,
    borderTopRightRadius: (value) => styled_components_1.css `border-top-right-radius: ${value};`,
    borderBottomRightRadius: (value) => styled_components_1.css `border-bottom-right-radius: ${value};`,
    borderBottomLeftRadius: (value) => styled_components_1.css `border-bottom-left-radius: ${value};`,
    borderRightRadius: (value) => styled_components_1.css `
    border-top-right-radius: ${value};
    border-bottom-right-radius: ${value};
  `,
    borderLeftRadius: (value) => styled_components_1.css `
    border-top-left-radius: ${value};
    border-bottom-left-radius: ${value};
  `,
    borderTopRadius: (value) => styled_components_1.css `
    border-top-left-radius: ${value};
    border-top-right-radius: ${value};
  `,
    borderBottomRadius: (value) => styled_components_1.css `
    border-bottom-left-radius: ${value};
    border-bottom-right-radius: ${value};
  `,
    boxShadow: (value) => styled_components_1.css `box-shadow: ${value};`,
    // Background
    background: (value) => styled_components_1.css `background: ${value};`,
    backgroundPosition: (value) => styled_components_1.css `background-position: ${value};`,
    backgroundRepeat: (value) => styled_components_1.css `background-repeat: ${value};`,
    backgroundSize: (value) => styled_components_1.css `background-size: ${value};`,
    backgroundImage: (value) => styled_components_1.css `background-image: url(${value});`,
    backgroundColor: (value) => styled_components_1.css `background-color: ${value};`,
    backgroundColorHover: (value) => styled_components_1.css `&&{&:hover{background-color: ${value};}}`,
    backgroundAttachment: (value) => styled_components_1.css `background-attachment: ${value};`,
    backgroundClip: (value) => styled_components_1.css `background-clip: ${value};`,
    backgroundOrigin: (value) => styled_components_1.css `background-origin: ${value};`,
    objectFit: (value) => styled_components_1.css `object-fit: ${value};`,
    // Flex
    flex: (value) => styled_components_1.css `flex: ${value};`,
    flexDirection: (value) => styled_components_1.css `flex-direction: ${value};`,
    flexWrap: (value) => styled_components_1.css `flex-wrap: ${value};`,
    justifyContent: (value) => styled_components_1.css `justify-content: ${value};`,
    alignItems: (value) => styled_components_1.css `align-items: ${value};`,
    alignContent: (value) => styled_components_1.css `align-content: ${value};`,
    alignSelf: (value) => styled_components_1.css `align-self: ${value};`,
    order: (value) => styled_components_1.css `order: ${value};`,
    flexGrow: (value) => styled_components_1.css `flex-grow: ${value};`,
    flexShrink: (value) => styled_components_1.css `flex-shrink: ${value};`,
    flexBasis: (value) => styled_components_1.css `flex-basis: ${value};`,
    // Misc
    cursor: (value) => styled_components_1.css `cursor: ${value};`,
    direction: (value) => styled_components_1.css `direction: ${value};`,
    opacity: (value) => styled_components_1.css `opacity: ${value};`,
    overflowWrap: (value) => styled_components_1.css `overflow-wrap: ${value};`,
    pointerEvents: (value) => styled_components_1.css `pointer-events: ${value};`,
    transform: (value) => styled_components_1.css `transform: ${value};`,
    transition: (value) => styled_components_1.css `transition: ${value};`,
    transitionDelay: (value) => styled_components_1.css `transition-delay: ${value};`,
    userSelect: (value) => styled_components_1.css `user-select: ${value};`,
    whiteSpace: (value) => styled_components_1.css `white-space: ${value};`,
    wordSpacing: (value) => styled_components_1.css `word-spacing: ${value};`,
    wordWrap: (value) => styled_components_1.css `word-wrap: ${value};`
};
// The signature for a tagged template should be (literals: TemplateStringsArray, ...placeholders: any[]) => string 
// Where literals are the strings in the template and placeholders are the variable values.
// https://stackoverflow.com/questions/49397538/typing-the-css-function-in-styled-components
exports.getMediaMixinsUp = ({ xl, lg, md, sm, xs }) => ({
    _xs: (literals, ...placeholders) => styled_components_1.css `
    @media (max-width: ${xs}px) {
      ${styled_components_1.css(literals, ...placeholders)}
    }
  `,
    _sm: (literals, ...placeholders) => styled_components_1.css `
    @media (min-width: ${sm}px) {
      ${styled_components_1.css(literals, ...placeholders)}
    }
  `,
    _md: (literals, ...placeholders) => styled_components_1.css `
    @media (min-width: ${md}px) {
      ${styled_components_1.css(literals, ...placeholders)}
    }
  `,
    _lg: (literals, ...placeholders) => styled_components_1.css `
    @media (min-width: ${lg}px) {
      ${styled_components_1.css(literals, ...placeholders)}
    }
  `,
    _xl: (literals, ...placeholders) => styled_components_1.css `
    @media (min-width: ${xl}px) {
      ${styled_components_1.css(literals, ...placeholders)}
    }
  `,
});
exports.getMediaMixinsDown = ({ xl, lg, md, sm, xs }) => ({
    _xs: (literals, ...placeholders) => styled_components_1.css `
    @media (max-width: ${xs}px) {
      ${styled_components_1.css(literals, ...placeholders)}
    }
  `,
    _sm: (literals, ...placeholders) => styled_components_1.css `
    @media (max-width: ${sm}px) {
      ${styled_components_1.css(literals, ...placeholders)}
    }
  `,
    _md: (literals, ...placeholders) => styled_components_1.css `
    @media (max-width: ${md}px) {
      ${styled_components_1.css(literals, ...placeholders)}
    }
  `,
    _lg: (literals, ...placeholders) => styled_components_1.css `
    @media (max-width: ${lg}px) {
      ${styled_components_1.css(literals, ...placeholders)}
    }
  `,
    _xl: (literals, ...placeholders) => styled_components_1.css `
    @media (min-width: ${xl}px) {
      ${styled_components_1.css(literals, ...placeholders)}
    }
  `,
});

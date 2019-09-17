import { FlattenSimpleInterpolation } from "styled-components"

// Enum to represent responsive media strategy
enum MEDIA_STRATEGIES {
  UP = "up",
  DOWN = "down"
};

// Interface for media breakpoints (pixel widths for different screen sizes)
interface IMediaBreakpoints {
  readonly xl: number,
  readonly lg: number,
  readonly md: number,
  readonly sm: number,
  readonly xs: number
}

// Interface for the styled-groove config object for customizing styled-groove
interface IConfig {
  ignoreMediaMixins?: boolean,
  mediaStrategy?: string,
  mediaSizes?: IMediaBreakpoints
}

// Declare new type as a function returning css interpolation of a value
type mixin = (value: string) => FlattenSimpleInterpolation;

// Interface for the styleMixins mapper
interface IStyleMixins {

  // Display
  display: mixin;
  position: mixin;
  float: mixin;
  clear: mixin;
  overflow: mixin;
  overflowX: mixin;
  overflowY: mixin;
  visibility: mixin;
  zIndex: mixin;

  // Sizing
  height: mixin;
  width: mixin;
  minHeight: mixin;
  minWidth: mixin;
  maxHeight: mixin;
  maxWidth: mixin;

  // Margin
  margin: mixin;
  marginTop: mixin;
  marginBottom: mixin;
  marginLeft: mixin;
  marginRight: mixin;
  marginX: mixin;
  marginY: mixin;

  // Padding
  padding: mixin;
  paddingTop: mixin;
  paddingBottom: mixin;
  paddingLeft: mixin;
  paddingRight: mixin;
  paddingX: mixin;
  paddingY: mixin;

  // Positioning
  top: mixin;
  bottom: mixin;
  left: mixin;
  right: mixin;

  // Typography
  color: mixin;
  fontSize: mixin;
  fontWeight: mixin;
  fontFamily: mixin;
  fontStyle: mixin;
  textAlign: mixin;
  textDecoration: mixin;
  hoverColor: mixin;
  lineHeight: mixin;
  letterSpacing: mixin;
  hyphens: mixin;
  textOverflow: mixin;
  textShadow: mixin;
  textTransform: mixin;
  light(): FlattenSimpleInterpolation;
  bold(): FlattenSimpleInterpolation;
  underline(): FlattenSimpleInterpolation;
  normal(): FlattenSimpleInterpolation;
  ellipsis(): FlattenSimpleInterpolation;
  noWrap(): FlattenSimpleInterpolation;

  // Border
  border: mixin;
  borderTop: mixin;
  borderBottom: mixin;
  borderRight: mixin;
  borderLeft: mixin;
  borderColor: mixin;
  borderRadius: mixin;
  borderTopLeftRadius: mixin;
  borderTopRightRadius: mixin;
  borderBottomRightRadius: mixin;
  borderBottomLeftRadius: mixin;
  borderRightRadius: mixin;
  borderLeftRadius: mixin;
  borderTopRadius: mixin;
  borderBottomRadius: mixin;
  boxShadow: mixin;

  // Background
  background: mixin;
  backgroundPosition: mixin;
  backgroundRepeat: mixin;
  backgroundSize: mixin;
  backgroundImage: mixin;
  backgroundColor: mixin;
  backgroundColorHover: mixin;
  backgroundAttachment: mixin;
  backgroundClip: mixin;
  backgroundOrigin: mixin;
  objectFit: mixin;

  // Flex
  flex: mixin;
  flexDirection: mixin;
  flexWrap: mixin;
  justifyContent: mixin;
  alignItems: mixin;
  alignContent: mixin;
  alignSelf: mixin;
  order: mixin;
  flexGrow: mixin;
  flexShrink: mixin;
  flexBasis: mixin;

  // Misc
  cursor: mixin;
  direction: mixin;
  opacity: mixin;
  overflowWrap: mixin;
  pointerEvents: mixin;
  transform: mixin;
  transition: mixin;
  transitionDelay: mixin;
  userSelect: mixin;
  whiteSpace: mixin;
  wordSpacing: mixin;
  wordWrap: mixin;
};

// Default media size ranges for media up strategy (default media strategy)
const DEFAULT_MEDIA_SIZES_UP: IMediaBreakpoints = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 575
};

// Default media size ranges for media down strategy
const DEFAULT_MEDIA_SIZES_DOWN: IMediaBreakpoints = {
  xl: 1200,
  lg: 1199,
  md: 991,
  sm: 767,
  xs: 575
};

// Interfaces
export { IMediaBreakpoints, IConfig, IStyleMixins };

// Enums
export { MEDIA_STRATEGIES };

// Default media sizes up/down
export { DEFAULT_MEDIA_SIZES_UP, DEFAULT_MEDIA_SIZES_DOWN };
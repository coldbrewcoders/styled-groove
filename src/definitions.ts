import { FlattenSimpleInterpolation } from "styled-components"

// Enum to represent responsive media strategy
enum MEDIA_STRATEGIES {
  UP = "up",
  DOWN = "down"
};

// Types
type mixin = (value: string) => FlattenSimpleInterpolation;

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
  mediaSizes?: IMediaBreakpoints,
}

// Interface for the styleMixins mapper
interface IStyleMixins {

  // Index signature
  // https://basarat.gitbooks.io/typescript/docs/types/index-signatures.html
  [key:string]: (value: string) => FlattenSimpleInterpolation;
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

// Enums
export { MEDIA_STRATEGIES };

// Types
export { mixin };

// Interfaces
export { IMediaBreakpoints, IConfig, IStyleMixins };

// Default media sizes up/down
export { DEFAULT_MEDIA_SIZES_UP, DEFAULT_MEDIA_SIZES_DOWN };
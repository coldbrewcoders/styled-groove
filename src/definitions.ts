import { FlattenSimpleInterpolation } from "styled-components";


// Enum to represent responsive media strategy
enum MEDIA_STRATEGIES {
  UP = "up",
  DOWN = "down"
};

// Type for value of a component prop
type ComponentPropValue = number | string | object | boolean;

// Type for style mixins
type Mixin = (value: string) => FlattenSimpleInterpolation;

// Type for media mixins
type MediaMixin = (literals: TemplateStringsArray, ...placeholders: any[]) => FlattenSimpleInterpolation;

// Interface for default media breakpoints (pixel widths for different screen sizes)
interface IMediaBreakpoints {
  readonly xl: number,
  readonly lg: number,
  readonly md: number,
  readonly sm: number,
  readonly xs: number
};

// Interface for custom media breakpoints (pixel widths for different screen sizes)
interface ICustomMediaBreakpoints {
  readonly xl?: number,
  readonly lg?: number,
  readonly md?: number,
  readonly sm?: number,
  readonly xs?: number
};

// Interface to access custom media breakpoint size
interface ICustomMediaBreakpointSize {
  [key: string]: number;
};

// Interface for the styleMixins mapper
interface IStyleMixins {
  [key: string]: Mixin;
};

// Interface for passed props object
interface IComponentProps {
  [key: string]: string | number | object;
};

// Interface for media mixins
interface IMediaMixins {
  [key: string]: MediaMixin;
};

// Interface for media styles map
interface IMediaStylesMap {
  [key: string]: FlattenSimpleInterpolation;
};

// Interface for the default styled-groove config object
interface IConfig {
  ignoreMediaMixins: boolean,
  mediaStrategy: MEDIA_STRATEGIES,
  mediaBreakpoints: IMediaBreakpoints,
};

// Interface for custom styled-groove config object
interface ICustomConfig {
  ignoreMediaMixins?: boolean,
  mediaStrategy?: MEDIA_STRATEGIES,
  mediaBreakpoints?: ICustomMediaBreakpoints,
};

// Default media breakpoints for media up strategy (default media strategy)
const DEFAULT_MEDIA_BREAKPOINTS_UP: IMediaBreakpoints = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 575
};

// Default media breakpoints for media down strategy
const DEFAULT_MEDIA_BREAKPOINTS_DOWN: IMediaBreakpoints = {
  xl: 1200,
  lg: 1199,
  md: 991,
  sm: 767,
  xs: 575
};

// Enums
export { MEDIA_STRATEGIES };

// Types
export { Mixin, MediaMixin, ComponentPropValue };

// Interfaces
export { IMediaBreakpoints, ICustomMediaBreakpoints, ICustomMediaBreakpointSize, IStyleMixins, IComponentProps, IMediaMixins, IMediaStylesMap, IConfig, ICustomConfig };

// Default media breakpoints up/down
export { DEFAULT_MEDIA_BREAKPOINTS_UP, DEFAULT_MEDIA_BREAKPOINTS_DOWN };
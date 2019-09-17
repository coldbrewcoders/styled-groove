import { IConfig } from "./definitions";
/**
 * Config options:
 *
 *  ignoreMediaMixins: bool (default false)
 *    - If set to true, media mixin prop check will be skipped (optimization if not using media mixins)
 *
 *  mediaStrategy: "up", "down" (default up)
 *    - Change direction of media strategy from up to down
 *
 *  mediaSizes: obj -> { xl, lg, md, sm, xs }
 *    - will override default media width ranges
 *
 **/
export declare const processConfigObject: (config: IConfig) => IConfig;

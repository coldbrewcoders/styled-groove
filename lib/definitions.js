"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enum to represent responsive media strategy
var MEDIA_STRATEGIES;
(function (MEDIA_STRATEGIES) {
    MEDIA_STRATEGIES["UP"] = "up";
    MEDIA_STRATEGIES["DOWN"] = "down";
})(MEDIA_STRATEGIES || (MEDIA_STRATEGIES = {}));
exports.MEDIA_STRATEGIES = MEDIA_STRATEGIES;
;
// Declare new type as a function returning css interpolation of a value
type;
;
// Default media size ranges for media up strategy (default media strategy)
const DEFAULT_MEDIA_SIZES_UP = {
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575
};
exports.DEFAULT_MEDIA_SIZES_UP = DEFAULT_MEDIA_SIZES_UP;
// Default media size ranges for media down strategy
const DEFAULT_MEDIA_SIZES_DOWN = {
    xl: 1200,
    lg: 1199,
    md: 991,
    sm: 767,
    xs: 575
};
exports.DEFAULT_MEDIA_SIZES_DOWN = DEFAULT_MEDIA_SIZES_DOWN;

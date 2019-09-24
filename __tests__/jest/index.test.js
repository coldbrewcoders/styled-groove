import applyGroove, { applyGrooveCustomConfig } from "src/";


/** Unit Tests for applyGroove **/

test("applyGroove(): Invalid values", () => {
  expect(applyGroove()).toBeUndefined();
  expect(applyGroove(undefined)).toBeUndefined();
  expect(applyGroove(null)).toBeUndefined();
  expect(applyGroove([])).toBeUndefined();
  expect(applyGroove(NaN)).toBeUndefined();
  expect(applyGroove(7)).toBeUndefined();
  expect(applyGroove("str")).toBeUndefined();
  expect(applyGroove(() => {})).toBeUndefined();
  expect(applyGroove(new String("test"))).toBeUndefined();
  expect(applyGroove({})).toBeUndefined();
  expect(applyGroove(Infinity)).toBeUndefined();
});

test("applyGroove(): Style Props (no config obj)", () => {
  // Display
  expect(applyGroove({ display: "block" })).toEqual(["display:", "block", ";"]);
  expect(applyGroove({ position: "relative" })).toEqual(["position:", "relative", ";"]);
  expect(applyGroove({ float: "right" })).toEqual(["float:", "right", ";"]);
  expect(applyGroove({ clear: "right" })).toEqual(["clear:", "right", ";"]);
  expect(applyGroove({ overflow: "auto" })).toEqual(["overflow:", "auto", ";"]);
  expect(applyGroove({ overflowX: "scroll" })).toEqual(["overflow-x:", "scroll", ";"]);
  expect(applyGroove({ overflowY: "scroll" })).toEqual(["overflow-y:", "scroll", ";"]);
  expect(applyGroove({ visibility: "hidden" })).toEqual(["visibility:", "hidden", ";"]);
  expect(applyGroove({ zIndex: "-20" })).toEqual(["z-index:", "-20", ";"]);
  
  // Sizing
  expect(applyGroove({ height: "100px" })).toEqual(["height:", "100px", ";"]);
  expect(applyGroove({ width: "100px" })).toEqual(["width:", "100px", ";"]);
  expect(applyGroove({ minHeight: "300px" })).toEqual(["min-height:", "300px", ";"]);
  expect(applyGroove({ minWidth: "300px" })).toEqual(["min-width:", "300px", ";"]);
  expect(applyGroove({ maxHeight: "200px" })).toEqual(["max-height:", "200px", ";"]);
  expect(applyGroove({ maxWidth: "300px" })).toEqual(["max-width:", "300px", ";"]);

  // Margin
  expect(applyGroove({ margin: "20px" })).toEqual(["margin:", "20px", ";"]);
  expect(applyGroove({ marginTop: "55px" })).toEqual(["margin-top:", "55px", ";"]);
  expect(applyGroove({ marginBottom: "22px" })).toEqual(["margin-bottom:", "22px", ";"]);
  expect(applyGroove({ marginLeft: "82px" })).toEqual(["margin-left:", "82px", ";"]);
  expect(applyGroove({ marginRight: "74px" })).toEqual(["margin-right:", "74px", ";"]);
  expect(applyGroove({ marginX: 0 })).toEqual(["margin-left:", "0", ";margin-right:", "0", ";"]);
  expect(applyGroove({ marginY: "30px" })).toEqual(["margin-top:", "30px", ";margin-bottom:", "30px", ";"]);

  // Padding
  expect(applyGroove({ padding: "20px" })).toEqual(["padding:", "20px", ";"]);
  expect(applyGroove({ paddingTop: "55px" })).toEqual(["padding-top:", "55px", ";"]);
  expect(applyGroove({ paddingBottom: "22px" })).toEqual(["padding-bottom:", "22px", ";"]);
  expect(applyGroove({ paddingLeft: "82px" })).toEqual(["padding-left:", "82px", ";"]);
  expect(applyGroove({ paddingRight: "74px" })).toEqual(["padding-right:", "74px", ";"]);
  expect(applyGroove({ paddingX: "30px" })).toEqual(["padding-left:", "30px", ";padding-right:", "30px", ";"]);
  expect(applyGroove({ paddingY: "30px" })).toEqual(["padding-top:", "30px", ";padding-bottom:", "30px", ";"]);

  // Positioning
  expect(applyGroove({ top: "5px" })).toEqual(["top:", "5px", ";"]);
  expect(applyGroove({ bottom: "-11px" })).toEqual(["bottom:", "-11px", ";"]);
  expect(applyGroove({ left: "-44px" })).toEqual(["left:", "-44px", ";"]);
  expect(applyGroove({ right: "72px" })).toEqual(["right:", "72px", ";"]);

  // Typography
  expect(applyGroove({ color: "#000" })).toEqual(["color:", "#000", ";"]);
  expect(applyGroove({ fontSize: "30px" })).toEqual(["font-size:", "30px", ";"]);
  expect(applyGroove({ fontWeight: "400" })).toEqual(["font-weight:", "400", ";"]);
  expect(applyGroove({ fontFamily: "anyFont" })).toEqual(["font-family:", "anyFont", ";"]);
  expect(applyGroove({ fontStyle: "anyValue" })).toEqual(["font-style:", "anyValue", ";"]);
  expect(applyGroove({ textAlign: "center" })).toEqual(["text-align:", "center", ";"]);
  expect(applyGroove({ textDecoration: "none" })).toEqual(["text-decoration:", "none", ";"]);
  expect(applyGroove({ hoverColor: "#666" })).toEqual(["&&{&:hover{color:", "#666", ";}}"]);
  expect(applyGroove({ lineHeight: "40px" })).toEqual(["line-height:", "40px", ";"]);
  expect(applyGroove({ letterSpacing: "2px" })).toEqual(["letter-spacing:", "2px", ";"]);
  expect(applyGroove({ hyphens: "initial" })).toEqual(["hyphens:", "initial", ";"]);
  expect(applyGroove({ textOverflow: "auto" })).toEqual(["text-overflow:", "auto", ";"]);
  expect(applyGroove({ textShadow: "someValue" })).toEqual(["text-shadow:", "someValue", ";"]);
  expect(applyGroove({ textTransform: "transformValue" })).toEqual(["text-transform:", "transformValue", ";"]);
  expect(applyGroove({ light: true })).toEqual(["font-weight:300;"]);
  expect(applyGroove({ bold: true })).toEqual(["font-weight:bold;"]);

  // Border
  expect(applyGroove({ border: "1px solid #000" })).toEqual(["border:", "1px solid #000", ";"]);
  expect(applyGroove({ borderTop: "1px solid #666" })).toEqual(["border-top:", "1px solid #666", ";"]);
  expect(applyGroove({ borderBottom: "2px solid #fff" })).toEqual(["border-bottom:", "2px solid #fff", ";"]);
  expect(applyGroove({ borderRight: "2px solid #000" })).toEqual(["border-right:", "2px solid #000", ";"]);
  expect(applyGroove({ borderLeft: "8px solid #666" })).toEqual(["border-left:", "8px solid #666", ";"]);
  expect(applyGroove({ borderColor: "#666" })).toEqual(["border-color:", "#666", ";"]);
  expect(applyGroove({ borderRadius: "4px" })).toEqual(["border-radius:", "4px", ";"]);
  expect(applyGroove({ borderTopLeftRadius: "4px" })).toEqual(["border-top-left-radius:", "4px", ";"]);
  expect(applyGroove({ borderTopRightRadius: "4px" })).toEqual(["border-top-right-radius:", "4px", ";"]);
  expect(applyGroove({ borderBottomRightRadius: "4px" })).toEqual(["border-bottom-right-radius:", "4px", ";"]);
  expect(applyGroove({ borderBottomLeftRadius: "4px" })).toEqual(["border-bottom-left-radius:", "4px", ";"]);
  expect(applyGroove({ borderRightRadius: "4px" })).toEqual(["border-top-right-radius:", "4px", ";border-bottom-right-radius:", "4px", ";"]);
  expect(applyGroove({ borderLeftRadius: "4px" })).toEqual(["border-top-left-radius:", "4px", ";border-bottom-left-radius:", "4px", ";"]);
  expect(applyGroove({ borderTopRadius: "4px" })).toEqual(["border-top-left-radius:", "4px", ";border-top-right-radius:", "4px", ";"]);
  expect(applyGroove({ borderBottomRadius: "4px" })).toEqual(["border-bottom-left-radius:", "4px", ";border-bottom-right-radius:", "4px", ";"]);
  expect(applyGroove({ boxShadow: "boxShadowValue" })).toEqual(["box-shadow:", "boxShadowValue", ";"]);

  // Background
  expect(applyGroove({ background: "#000" })).toEqual(["background:", "#000", ";"]);
  expect(applyGroove({ backgroundPosition: "center" })).toEqual(["background-position:", "center", ";"]);
  expect(applyGroove({ backgroundRepeat: "initial" })).toEqual(["background-repeat:", "initial", ";"]);
  expect(applyGroove({ backgroundSize: "40px 40px" })).toEqual(["background-size:", "40px 40px", ";"]);
  expect(applyGroove({ backgroundImage: "https://test.com/img.jpg" })).toEqual(["background-image:url(", "https://test.com/img.jpg", ");"]);
  expect(applyGroove({ backgroundColor: "#666" })).toEqual(["background-color:", "#666", ";"]);
  expect(applyGroove({ backgroundColorHover: "#fff" })).toEqual(["&&{&:hover{background-color:", "#fff", ";}}"]);
  expect(applyGroove({ backgroundAttachment: "initial" })).toEqual(["background-attachment:", "initial", ";"]);
  expect(applyGroove({ backgroundClip: "initial" })).toEqual(["background-clip:", "initial", ";"]);
  expect(applyGroove({ backgroundOrigin: "content-box" })).toEqual(["background-origin:", "content-box", ";"]);
  expect(applyGroove({ objectFit: "initial" })).toEqual(["object-fit:", "initial", ";"]);

  // Flex
  expect(applyGroove({ flex: "0 1 auto" })).toEqual(["flex:", "0 1 auto", ";"]);
  expect(applyGroove({ flexDirection: "column" })).toEqual(["flex-direction:", "column", ";"]);
  expect(applyGroove({ flexWrap: "nowrap" })).toEqual(["flex-wrap:", "nowrap", ";"]);
  expect(applyGroove({ justifyContent: "flex-end" })).toEqual(["justify-content:", "flex-end", ";"]);
  expect(applyGroove({ alignItems: "center" })).toEqual(["align-items:", "center", ";"]);
  expect(applyGroove({ alignContent: "space-around" })).toEqual(["align-content:", "space-around", ";"]);
  expect(applyGroove({ alignSelf: "center" })).toEqual(["align-self:", "center", ";"]);
  expect(applyGroove({ order: "2" })).toEqual(["order:", "2", ";"]);
  expect(applyGroove({ flexGrow: "3" })).toEqual(["flex-grow:", "3", ";"]);
  expect(applyGroove({ flexShrink: "0.6" })).toEqual(["flex-shrink:", "0.6", ";"]);
  expect(applyGroove({ flexBasis: "200px" })).toEqual(["flex-basis:", "200px", ";"]);

  // Misc
  expect(applyGroove({ cursor: "pointer" })).toEqual(["cursor:", "pointer", ";"]);
  expect(applyGroove({ direction: "rtl" })).toEqual(["direction:", "rtl", ";"]);
  expect(applyGroove({ opacity: "0.5" })).toEqual(["opacity:", "0.5", ";"]);
  expect(applyGroove({ overflowWrap: "initial" })).toEqual(["overflow-wrap:", "initial", ";"]);
  expect(applyGroove({ pointerEvents: "none" })).toEqual(["pointer-events:", "none", ";"]);
  expect(applyGroove({ transform: "rotate(20deg)" })).toEqual(["transform:", "rotate(20deg)", ";"]);
  expect(applyGroove({ transition: "width 2s, height 2s, transform 2s" })).toEqual(["transition:", "width 2s, height 2s, transform 2s", ";"]);
  expect(applyGroove({ transitionDelay: "0.8s" })).toEqual(["transition-delay:", "0.8s", ";"]);
  expect(applyGroove({ userSelect: "none" })).toEqual(["user-select:", "none", ";"]);
  expect(applyGroove({ whiteSpace: "initial" })).toEqual(["white-space:", "initial", ";"]);
  expect(applyGroove({ wordSpacing: "2px" })).toEqual(["word-spacing:", "2px", ";"]);
  expect(applyGroove({ wordWrap: "initial" })).toEqual(["word-wrap:", "initial", ";"]);

  // Style prop edge case
  expect(applyGroove({ minHeight: false })).toEqual([]);

  // Multiple Style props
  expect(applyGroove({ textAlign: "right", opacity: 0.5, width: "500px", height: "500px" })).toEqual(["text-align:", "right", ";", "opacity:", "0.5", ";", "width:", "500px", ";", "height:", "500px", ";"]);

  // Very same results when empty config param is passed
  expect(applyGroove({ textAlign: "right", opacity: 0.5, width: "500px", height: "500px" }, {})).toEqual(["text-align:", "right", ";", "opacity:", "0.5", ";", "width:", "500px", ";", "height:", "500px", ";"]);


  // Multiple Style props mixed with random props
  expect(applyGroove({ textAlign: "right", opacity: 0.5, width: "500px", height: "500px", formName: "myForm", userId: 7, goBack: () => { window.history.back(); } })).toEqual(["text-align:", "right", ";", "opacity:", "0.5", ";", "width:", "500px", ";", "height:", "500px", ";"]);

  // Verify same results when empty config param is passed
  expect(applyGroove({ textAlign: "right", opacity: 0.5, width: "500px", height: "500px", formName: "myForm", userId: 7, goBack: () => { window.history.back(); } }, {})).toEqual(["text-align:", "right", ";", "opacity:", "0.5", ";", "width:", "500px", ";", "height:", "500px", ";"]);
});

test("applyGroove(): Media Props Up Strategy (no config obj)", () => {
  // Individual media prop
  expect(applyGroove({ _xs: { opacity: 0.2 } })).toEqual(["@media (max-width:", "575", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _sm: { opacity: 0.2 } })).toEqual(["@media (min-width:", "576", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _md: { opacity: 0.2 } })).toEqual(["@media (min-width:", "768", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _lg: { opacity: 0.2 } })).toEqual(["@media (min-width:", "992", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _xl: { opacity: 0.2 } })).toEqual(["@media (min-width:", "1200", "px){", "opacity:", "0.2", ";", "}"]);

  // Multiple Media props
  expect(applyGroove({ _xs: { opacity: 0.2 }, _sm: { opacity: 0.3 }, _md: { opacity: 0.4 }, _lg: { opacity: 0.5 }, _xl: { opacity: 1.0 } })).toEqual(["@media (max-width:", "575", "px){", "opacity:", "0.2", ";", "}", "@media (min-width:", "576", "px){", "opacity:", "0.3", ";", "}", "@media (min-width:", "768", "px){", "opacity:", "0.4", ";", "}", "@media (min-width:", "992", "px){", "opacity:", "0.5", ";", "}", "@media (min-width:", "1200", "px){", "opacity:", "1", ";", "}"]);

  // Multiple media props misordered
  expect(applyGroove({ _xs: { opacity: 0.2 }, _sm: { opacity: 0.3 }, _md: { opacity: 0.4 }, _lg: { opacity: 0.5 }, _xl: { opacity: 1.0 } })).toEqual(applyGroove({ _lg: { opacity: 0.5 }, _xs: { opacity: 0.2 }, _sm: { opacity: 0.3 }, _xl: { opacity: 1.0 }, _md: { opacity: 0.4 } }));

  // Media props and Style props
  expect(applyGroove({ _sm: { opacity: 0.2 } })).toEqual(["@media (min-width:", "576", "px){", "opacity:", "0.2", ";", "}"]);
});

test("applyGroove(): Media Props -> Config Down Strategy", () => {

  const config = { mediaStrategy: "down" };

  expect(applyGroove({ _xs: { opacity: 0.2 } }, config)).toEqual(["@media (max-width:", "575", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _sm: { opacity: 0.2 } }, config)).toEqual(["@media (max-width:", "767", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _md: { opacity: 0.2 } }, config)).toEqual(["@media (max-width:", "991", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _lg: { opacity: 0.2 } }, config)).toEqual(["@media (max-width:", "1199", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _xl: { opacity: 0.2 } }, config)).toEqual(["@media (min-width:", "1200", "px){", "opacity:", "0.2", ";", "}"]);

  // Verify that 'applyGrooveCustomConfig' has same behavior when given the same config object
  const customApplyGroove = applyGrooveCustomConfig(config);

  expect(applyGroove({ _xs: { opacity: 0.2 } }, config)).toEqual(customApplyGroove({ _xs: { opacity: 0.2 } }));
  expect(applyGroove({ _sm: { opacity: 0.2 } }, config)).toEqual(customApplyGroove({ _sm: { opacity: 0.2 } }));
  expect(applyGroove({ _md: { opacity: 0.2 } }, config)).toEqual(customApplyGroove({ _md: { opacity: 0.2 } }));
  expect(applyGroove({ _lg: { opacity: 0.2 } }, config)).toEqual(customApplyGroove({ _lg: { opacity: 0.2 } }));
  expect(applyGroove({ _xl: { opacity: 0.2 } }, config)).toEqual(customApplyGroove({ _xl: { opacity: 0.2 } }));
});

test("applyGroove(): Custom Media Sizes, Up Strategy", () => {

  // All media breakpoints overridden
  let config = { mediaSizes: { xl: 1300, lg: 1000, md: 850, sm: 701, xs: 700 }, mediaStrategy: "up" };

  expect(applyGroove({ _xs: { opacity: 0.2 } }, config)).toEqual(["@media (max-width:", "700", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _sm: { opacity: 0.2 } }, config)).toEqual(["@media (min-width:", "701", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _md: { opacity: 0.2 } }, config)).toEqual(["@media (min-width:", "850", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _lg: { opacity: 0.2 } }, config)).toEqual(["@media (min-width:", "1000", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _xl: { opacity: 0.2 } }, config)).toEqual(["@media (min-width:", "1300", "px){", "opacity:", "0.2", ";", "}"]);

  // Subset of media breakpoints overridden
  config = { mediaSizes: { lg: 1000, md: 850 }, mediaStrategy: "up" };

  expect(applyGroove({ _xs: { opacity: 0.2 } }, config)).toEqual(["@media (max-width:", "575", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _sm: { opacity: 0.2 } }, config)).toEqual(["@media (min-width:", "576", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _md: { opacity: 0.2 } }, config)).toEqual(["@media (min-width:", "850", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _lg: { opacity: 0.2 } }, config)).toEqual(["@media (min-width:", "1000", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _xl: { opacity: 0.2 } }, config)).toEqual(["@media (min-width:", "1200", "px){", "opacity:", "0.2", ";", "}"]);
});

test("applyGroove(): Custom Media Sizes, Down Strategy", () => {

  // All media breakpoints overridden
  let config = { mediaSizes: { xl: 1300, lg: 1299, md: 850, sm: 700, xs: 550 }, mediaStrategy: "down" };

  expect(applyGroove({ _xs: { opacity: 0.2 } }, config)).toEqual(["@media (max-width:", "550", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _sm: { opacity: 0.2 } }, config)).toEqual(["@media (max-width:", "700", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _md: { opacity: 0.2 } }, config)).toEqual(["@media (max-width:", "850", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _lg: { opacity: 0.2 } }, config)).toEqual(["@media (max-width:", "1299", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _xl: { opacity: 0.2 } }, config)).toEqual(["@media (min-width:", "1300", "px){", "opacity:", "0.2", ";", "}"]);

  // Subset of media breakpoints overridden
  config = { mediaSizes: { md: 850, sm: 650 }, mediaStrategy: "down" };

  expect(applyGroove({ _xs: { opacity: 0.2 } }, config)).toEqual(["@media (max-width:", "575", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _sm: { opacity: 0.2 } }, config)).toEqual(["@media (max-width:", "650", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _md: { opacity: 0.2 } }, config)).toEqual(["@media (max-width:", "850", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _lg: { opacity: 0.2 } }, config)).toEqual(["@media (max-width:", "1199", "px){", "opacity:", "0.2", ";", "}"]);
  expect(applyGroove({ _xl: { opacity: 0.2 } }, config)).toEqual(["@media (min-width:", "1200", "px){", "opacity:", "0.2", ";", "}"]);
});

test("applyGroove(): Config -> Ignore Media Mixins", () => {

  let config = { ignoreMediaMixins: true };

  expect(applyGroove({ position: "relative", _xs: { opacity: 0.2 } }, config)).toEqual(["position:", "relative", ";"]);
  expect(applyGroove({ zIndex: "-20", _xs: { opacity: 0.2 }, _sm: { color: "#fff" }, _md: { opacity: 0.2, position: "relative" }, _lg: { textAlign: "center" }, _xl: { visibility: "initial" } }, config)).toEqual(["z-index:", "-20", ";"]);


  config = { ignoreMediaMixins: true, mediaStrategy: "up" };

  expect(applyGroove({ position: "relative", _xs: { opacity: 0.2 } }, config)).toEqual(["position:", "relative", ";"]);
  expect(applyGroove({ zIndex: "-20", _xs: { opacity: 0.2 }, _sm: { color: "#fff" }, _md: { opacity: 0.2, position: "relative" }, _lg: { textAlign: "center" }, _xl: { visibility: "initial" } }, config)).toEqual(["z-index:", "-20", ";"]);


  config = { ignoreMediaMixins: true, mediaStrategy: "down" };

  expect(applyGroove({ position: "relative", _xs: { opacity: 0.2 } }, config)).toEqual(["position:", "relative", ";"]);
  expect(applyGroove({ zIndex: "-20", _xs: { opacity: 0.2 }, _sm: { color: "#fff" }, _md: { opacity: 0.2, position: "relative" }, _lg: { textAlign: "center" }, _xl: { visibility: "initial" } }, config)).toEqual(["z-index:", "-20", ";"]);
});

test("applyGroove(): Media prop edge cases", () => {
  expect(applyGroove({ _xs: {}, _sm: {}, _md: {}, _lg: {}, _xl: {} })).toEqual([]);
  expect(applyGroove({ _xs: 0, _sm: null, _md: undefined, _lg: NaN, _xl: Infinity })).toEqual([]);
  expect(applyGroove({ _xs: { invalidProp: "asdf" }, _sm: { opacity: 0 } })).toEqual(["@media (min-width:", "576", "px){", "opacity:", "0", ";", "}"]);
  expect(applyGroove({ _xs: { marginRight: false } })).toEqual([]);
});

test("applyGroove(): config edge cases and errors", () => {
  expect(applyGroove({ position: "relative" }, [])).toEqual(["position:", "relative", ";"]);
  expect(applyGroove({ position: "relative" }, { ignoreMediaMixins: false })).toEqual(["position:", "relative", ";"]);
  expect(applyGroove({ position: "relative" }, { mediaStrategy: "invalidValue" })).toEqual(["position:", "relative", ";"]);
  expect(applyGroove({ position: "relative" }, { mediaSizes: 7 })).toEqual(["position:", "relative", ";"]);
  expect(applyGroove({ position: "relative" }, { mediaSizes: { invalidProp: "blah" } })).toEqual(["position:", "relative", ";"]);
  expect(applyGroove({ position: "relative" }, { mediaSizes: { xs: 300, sm: 302 } })).toEqual(["position:", "relative", ";"]);
  expect(applyGroove({ position: "relative" }, { mediaStrategy: "down", mediaSizes: { xl: 1000, lg: 950 } })).toEqual(["position:", "relative", ";"]);
  expect(applyGroove({ position: "relative" }, { mediaSizes: { xl: 1000, lg: 1200 } })).toEqual(["position:", "relative", ";"]);
});
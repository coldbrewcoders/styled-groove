import applyGroove from "src/";


/** Unit Tests for applyGroove **/

test("mixinMapper() Invalid values for Arg1: -> props object", () => {
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
});

test("applyGroove() style props for Arg1: -> props object", () => {
  // Display
  expect(applyGroove({ display: "block" })).toEqual(["display:", "block", ";"]);
  expect(applyGroove({ position: "relative" })).toEqual(["position:", "relative", ";"]);
  expect(applyGroove({ float: "right" })).toEqual(["float:", "right", ";"]);
});
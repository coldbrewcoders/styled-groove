// index.js Methods
import mixinMapper from "../../src/"


/**** Unit Tests for 'mixinMapper' aka 'applyGroove' ****/

test("mixinMapper() Invalid values for Arg1: -> props object", () => {
  expect(mixinMapper()).toBeUndefined();
  expect(mixinMapper(undefined)).toBeUndefined();
  expect(mixinMapper(null)).toBeUndefined();
  expect(mixinMapper([])).toBeUndefined();
  expect(mixinMapper(NaN)).toBeUndefined();
  expect(mixinMapper(7)).toBeUndefined();
  expect(mixinMapper("str")).toBeUndefined();
  expect(mixinMapper(() => {})).toBeUndefined();
  expect(mixinMapper(new String("test"))).toBeUndefined();
  expect(mixinMapper({})).toBeUndefined();
});





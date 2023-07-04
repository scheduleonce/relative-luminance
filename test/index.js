import test from "node:test";
import assert from "node:assert/strict";
import luminance from "../lib/index.js";

test("luminance should return 'dark' for dark colors", (t) => {
  assert.strictEqual(luminance("#000000"), "dark");
  assert.strictEqual(luminance("#333333"), "dark");
  assert.strictEqual(luminance("#666666"), "dark");
});

test("luminance should return 'light' for light colors", (t) => {
  assert.strictEqual(luminance("#ffffff"), "light");
  assert.strictEqual(luminance("#cccccc"), "light");
});

test("luminance should throw 'Please provide a hex color code' if no color code is provided", (t) => {
  assert.throws(() => {
    luminance();
  }, /Please provide a hex color code/);
});

test("luminance should throw 'Please provide a valid hex code' if an invalid hex code is provided", (t) => {
  assert.throws(() => {
    luminance("#12345");
  }, /Please provide a valid hex code/);
});

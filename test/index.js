const test = require("tape");
const relativeLuminance = require("../lib");

test("relativeLuminance should return 'dark' for dark colors", (t) => {
  t.equal(relativeLuminance("#000000"), "dark");
  t.equal(relativeLuminance("#333333"), "dark");
  t.equal(relativeLuminance("#666666"), "dark");
  t.end();
});

test("relativeLuminance should return 'light' for light colors", (t) => {
  t.equal(relativeLuminance("#ffffff"), "light");
  t.equal(relativeLuminance("#cccccc"), "light");
  t.end();
});

test("relativeLuminance should return 'Please provide a hex color code' if no color code is provided", (t) => {
  t.equal(relativeLuminance(), "Please provide a hex color code");
  t.end();
});

test("relativeLuminance should return 'Please provide a valid hex code' if an invalid hex code is provided", (t) => {
  t.equal(relativeLuminance("#12345"), "Please provide a valid hex code");
  t.end();
});

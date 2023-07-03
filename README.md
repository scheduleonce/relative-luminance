# relative-luminance

[![Build status](https://github.com/scheduleonce/relative-luminance/actions/workflows/node.js.yml/badge.svg)](https://github.com/scheduleonce/relative-luminance/actions) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Calculate the luminance of a given hex color code

[Relative luminance](https://www.w3.org/WAI/GL/wiki/Relative_luminance) is a measure of the brightness of a color that is useful in determining the contrast between two colors. For example, if you want to apply a background color to a button, you would want to calculate the luminance of the color to ensure that the text on the button is readable. If the background color is too light, you would not want to put light text on it, and vice versa. This is especially important for accessibility reasons, as it ensures that people with visual impairments can read the text on your buttons and other UI elements.

### Installation

To install this module, run the following command:

```sh
$ npm install @oncehub/relative-luminance
```

### Usage

To use this module, simply require it in your Node.js application and call the relativeLuminance function with a hex color code as its argument. The function will return either "dark" or "light" depending on the luminance of the color.

```js
const luminance = require("@oncehub/relative-luminance");
console.log(luminance("#000000")); // "dark"
console.log(luminance("#ffffff")); // "light"
```

If the input is invalid, the function will return either "Please provide a hex color code" or "Please provide a valid hex code".

```js
console.log(colorLuminance()); // "Please provide a hex color code"
console.log(colorLuminance("#12345")); // "Please provide a valid hex code"
```

### License

This module is licensed under the MIT License. See the LICENSE file for details.

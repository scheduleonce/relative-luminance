# relative-luminance

[![Build status](https://github.com/scheduleonce/relative-luminance/workflows/build/badge.svg)](https://github.com/scheduleonce/relative-luminance/actions) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Returns the relative luminance of a color

- Returns either `dark` or `light` if a color is considered dark or light accordingly

### Usage

```js
const luminance = require("oncehub/relative-luminance");
luminance("#006bb1"); // dark
luminance("#ffffff"); // light
```

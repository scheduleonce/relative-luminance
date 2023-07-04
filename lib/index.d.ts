/**
Calculates the luminance of a given hex color code.
@param colorCode The hex color code to calculate the luminance of.
@returns Either "dark" or "light" depending on the luminance of the color.
@throws Will throw an error if colorCode is invalid or undefined.
@example
```js
import luminance from '@oncehub/relative-luminance';

luminance("#000000");
//=> dark

luminance("#ffffff");
//=> light
```
 */
export default function relativeLuminance(colorCode: string): "dark" | "light";

declare module "relativeLuminance" {
  /**
   * Calculates the luminance of a given hex color code.
   * @param colorCode The hex color code to calculate the luminance of.
   * @returns Either "dark" or "light" depending on the luminance of the color.
   * @throws Will throw an error if colorCode is invalid or undefined.
   */
  export function relativeLuminance(colorCode: string): "dark" | "light";
}

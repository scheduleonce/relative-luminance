declare module "relativeLuminance" {
  /**
   * Calculates the luminance of a given hex color code.
   * @param colorCode The hex color code to calculate the luminance of.
   * @returns Either "dark" or "light" depending on the luminance of the color.
   */
  function relativeLuminance(
    colorCode: string
  ):
    | "dark"
    | "light"
    | "Please provide a hex color code"
    | "Please provide a valid hex code";

  export = relativeLuminance;
}

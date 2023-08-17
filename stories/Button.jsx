import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import luminance from "../lib/index";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, themeColor, size, ...props }) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  const theme = luminance(themeColor);
  const color = primary
    ? theme === "dark"
      ? "#ffffff"
      : "#333333"
    : theme === "light"
    ? "#333333"
    : themeColor;
  const borderColor = themeColor === "#ffffff" ? "#333333" : themeColor;

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor: themeColor, color, borderColor }}
      {...props}
    >
      Button
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What theme color to use
   */
  themeColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  themeColor: "#006bb1",
  primary: false,
  size: "medium",
  onClick: undefined,
};

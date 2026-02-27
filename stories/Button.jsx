import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import luminance from "../lib/index";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  themeColor = "#006bb1",
  size = "medium",
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  const theme = luminance(themeColor);
  let color = themeColor;
  if (primary) {
    if (theme === "dark") {
      color = "#ffffff";
    } else {
      color = "#333333";
    }
  } else if (theme === "light") {
    color = "#333333";
  }
  const borderColor = themeColor === "#ffffff" ? "#333333" : themeColor;

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " ",
      )}
      style={{ backgroundColor: primary ? themeColor : "", color, borderColor }}
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

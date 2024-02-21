import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[31px]", circle: "rounded-[50%]" };
const variants = {
  fill: {
    gray_900_03: "bg-gray-900_03 text-lime-A200",
    gray_900_02: "bg-gray-900_02 text-white-A700",
    gray_900_01: "bg-gray-900_01 text-white-A700",
    gray_900: "bg-gray-900 text-gray-400",
    lime_500: "bg-lime-500 text-gray-900_01",
  },
  outline: {
    gray_900_02: "border border-gray-900_02 border-solid text-white-A700",
    lime_500_19_lime_500_19:
      "bg-gradient  border border-solid lime_500_33_lime_500_33_border",
  },
};
const sizes = { xs: "p-2.5", sm: "p-[13px]", md: "p-4", lg: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "gray_900_03",
    "gray_900_02",
    "gray_900_01",
    "gray_900",
    "lime_500",
    "lime_500_19_lime_500_19",
  ]),
};

export { Button };

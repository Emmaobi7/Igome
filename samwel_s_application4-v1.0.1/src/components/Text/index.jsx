import React from "react";

const sizeClasses = {
  txtLexendMedium2081: "font-lexend font-medium",
  txtLexendLight1561: "font-lexend font-light",
  txtLexendLight1387: "font-lexend font-light",
  txtLexendLight18Gray40001: "font-lexend font-light",
  txtLexendRegular22: "font-lexend font-normal",
  txtLexendMedium48WhiteA700: "font-lexend font-medium",
  txtLexendRegular24: "font-lexend font-normal",
  txtLexendRegular48: "font-lexend font-normal",
  txtLexendMedium48: "font-lexend font-medium",
  txtLexendLight18Gray400: "font-lexend font-light",
  txtLexendRegular1734: "font-lexend font-normal",
  txtLexendRegular40: "font-lexend font-normal",
  txtLexendMedium30: "font-lexend font-medium",
  txtLexendRegular20: "font-lexend font-normal",
  txtLexendMedium58Gray800: "font-lexend font-medium",
  txtLexendMedium18: "font-lexend font-medium",
  txtLexendMedium58WhiteA700: "font-lexend font-medium",
  txtLexendRegular1561: "font-lexend font-normal",
  txtLexendLight18: "font-lexend font-light",
  txtLexendSemiBold24: "font-lexend font-semibold",
  txtLexendMedium38: "font-lexend font-medium",
  txtLexendLight18Gray300: "font-lexend font-light",
  txtLexendRegular18: "font-lexend font-normal",
  txtLexendMedium58: "font-lexend font-medium",
  txtLexendMedium1734: "font-lexend font-medium",
  txtLexendSemiBold30: "font-lexend font-semibold",
  txtLexendMedium20: "font-lexend font-medium",
  txtLexendRegular18Gray300: "font-lexend font-normal",
  txtLexendRegular18Gray400: "font-lexend font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    gray_900_01: "bg-gray-900_01 text-white-A700",
    gray_900: "bg-gray-900 text-gray-700",
  },
  outline: {
    gray_900_02: "border border-gray-900_02 border-solid text-white-A700",
  },
};
const shapes = { square: "rounded-none", round: "rounded-[37px]" };
const sizes = {
  xs: "pb-[18px] pt-[21px] px-[18px]",
  sm: "pb-6 pt-[25px] sm:px-5 px-6",
  md: "pb-6 sm:pl-5 pl-6 pr-3 pt-[27px]",
  lg: "pb-[27px] pl-[17px] sm:pr-5 pr-[27px] pt-7",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_900_01", "gray_900", "gray_900_02"]),
};

export { Input };

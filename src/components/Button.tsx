import React from "react";
import { ButtonHTMLAttributes, FC } from "react";
import { IconType } from "react-icons";

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "blue" | "white";

type ButtonProps = {
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: IconType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  size = "medium",
  color = "blue",
  icon: Icon,
  children,
  className = "",
  ...props
}) => {
  const sizeClasses = {
    small: "px-2 py-1 text-xs sm:px-3 sm:text-sm",
    medium: "px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base",
    large: "px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg",
  };

  const colorClasses = {
    blue: "bg-blue text-white hover:bg-blue-700",
    white: "bg-white text-black hover:bg-gray-100 ",
  };

  const baseClasses =
    "rounded-lg font-semibold font-gilroy-medium inline-flex items-center justify-center transition-colors duration-200";
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${colorClasses[color]} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
      {Icon && (
        <Icon
          className={`ml-1 sm:ml-2 ${
            size === "small" ? "text-xs sm:text-sm" : size === "large" ? "text-base sm:text-xl" : "text-sm sm:text-base"
          }`}
        />
      )}
    </button>
  );
};

export default Button;

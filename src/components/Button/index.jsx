import React from "react";
import { twMerge } from "tailwind-merge";

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}) {
  const baseStyles =
    "px-4 py-2 rounded-main focus:outline-none active:scale-95 duration-200 text-nowrap outline-none";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/[0.8]",
    outlined: "border border-primary hover:bg-primary/[0.1]",
  };

  const variantStyles = variants[variant] || variants.primary;

  return (
    <button
      className={twMerge(`${baseStyles} ${variantStyles}`, className)}
      {...props}
    >
      {children}
    </button>
  );
}

// src/components/button/Button.tsx
"use client";

import React from "react";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary" | "menu" | "menu-mobile";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  /** Kun relevant for menu-mobile: om burgeren er åben */
  isOpen?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  isOpen = false,
  children,
  className = "",
  ...props
}) => {
  const cls = [
    "btn",
    `btn--${variant}`,
    isOpen && variant === "menu-mobile" ? "btn--menu-mobile--open" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={cls} {...props}>
      {variant !== "menu-mobile" && children}
      {/* for menu-mobile bruger vi pseudo-elementer */}
    </button>
  );
};

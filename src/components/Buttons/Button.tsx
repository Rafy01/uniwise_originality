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
  hredf?: string; // Tilføjet for at matche tidligere brug
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
    variant === "menu-mobile" && isOpen ? "btn--menu-mobile--open" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={cls} {...props}>
      {/* hvis det ikke er burger, så vis children */}
      {variant !== "menu-mobile" && children}

      {/* burger-lines (skjult content for screenreaders) */}
      {variant === "menu-mobile" && (
        <span className="btn__burger" aria-hidden="true">
          <span className="btn__burger-line" />
          <span className="btn__burger-line" />
        </span>
      )}
      <span className="sr-only">
        {variant === "menu-mobile" ? (isOpen ? "Close menu" : "Open menu") : ""}
      </span>
    </button>
  );
};  

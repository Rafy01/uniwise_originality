// src/components/button/Button.tsx
"use client";

import React from "react";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary" | "menu" | "menu-mobile";

export interface ButtonProps {
  variant?: ButtonVariant;
  /** Kun relevant for menu-mobile: om burgeren er åben */
  isOpen?: boolean;
  /** Hvis du vil bruge et link i stedet for knap */
  as?: "button" | "a";
  /** Kun relevant for <a> */
  href?: string;
  /** Kun relevant for <a> */
  download?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

/**
 * Render enten <button> eller <a> afhængigt af props.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  isOpen = false,
  as,
  href,
  download,
  children,
  className = "",
  onClick,
  ...rest
}) => {
  // Sammensæt klasser
  const cls = [
    "btn",
    `btn--${variant}`,
    variant === "menu-mobile" && isOpen ? "btn--menu-mobile--open" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Når as="a" eller href er sat, brug <a>
  const useAnchor = as === "a" || (href !== undefined && as !== "button");

  if (useAnchor) {
    return (
      <a
        className={cls}
        href={href}
        download={download}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {variant !== "menu-mobile" && children}
        {variant === "menu-mobile" && (
          <span className="btn__burger" aria-hidden="true">
            <span className="btn__burger-line" />
            <span className="btn__burger-line" />
          </span>
        )}
      </a>
    );
  }

  // Ellers: normal <button>
  return (
    <button
      type="button"
      className={cls}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {variant !== "menu-mobile" && children}
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

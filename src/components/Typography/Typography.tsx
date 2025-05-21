"use client";
import React from "react";
import "./Typography.css";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "link-primary"
  | "link-secondary";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /** Vælg hvilken typografi der skal rendres */
  variant?: TypographyVariant;
  /** Kun relevant for link-varianter */
  href?: string;
}

/**
 * Genbrugelig Typography-komponent
 *
 * - h1–h5 ➝ overskrifter
 * - body ➝ brødtekst (p)
 * - link-primary / link-secondary ➝ <a>
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  href,
  children,
  className = "",
  ...props
}) => {
  // Vælg HTML-tag ud fra variant
  let Tag: keyof JSX.IntrinsicElements = "p";
  if (variant === "h1") Tag = "h1";
  else if (variant === "h2") Tag = "h2";
  else if (variant === "h3") Tag = "h3";
  else if (variant === "h4") Tag = "h4";
  else if (variant === "h5") Tag = "h5";
  else if (variant.startsWith("link")) Tag = "a";

  // Saml CSS-klasser
  const cls = `typography typography--${variant} ${className}`.trim();

  // Hvis det er et link, render <a href>
  if (Tag === "a") {
    return (
      <a
        className={cls}
        href={href}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  // Ellers normal overskrift eller paragraph
  return React.createElement(Tag, { className: cls, ...props }, children);
};

export default Typography;

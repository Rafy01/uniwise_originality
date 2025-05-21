// src/components/header/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HeaderProps } from "./Header.types";
import "./Header.css";
import { Button } from "../buttons/Button";

export function Header({ navItems, onCtaClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("");

  useEffect(() => {
    const updateActive = () => {
      setActiveHref(window.location.hash || window.location.pathname);
    };
    updateActive();
    window.addEventListener("hashchange", updateActive);
    return () => window.removeEventListener("hashchange", updateActive);
  }, []);

  return (
    <>
      {/* Skip link for tastatur + screenreader */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header className="header">
        <div className="header__inner">
          {/* Logo */}
          <a href="/" className="header__logo">
            <img
              src="/UNIwise_logo_white.png"
              alt="UNIwise logo"
              className="header__logo-img"
            />
          </a>

          {/* Desktop navigation */}
          <nav className="nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <div key={item.href} className="nav__item">
                <a
                  href={item.href}
                  className="nav__link"
                  aria-current={item.href === activeHref ? "page" : undefined}
                  onClick={() => setActiveHref(item.href)}
                >
                  {item.label}
                </a>
                {item.subItems && (
                  <div className="nav__submenu" role="menu">
                    {item.subItems.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        className="nav__link"
                        role="menuitem"
                        aria-current={
                          sub.href === activeHref ? "page" : undefined
                        }
                        onClick={() => setActiveHref(sub.href)}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Button
            variant="menu"
            className="cta-button"
            onClick={onCtaClick}
            aria-label="Request a demo"
          >
            REQUEST A DEMO
          </Button>

          {/* Mobile toggle */}
          <Button
            variant="menu-mobile"
            isOpen={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="mobile-menu" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <div key={item.href} className="mobile-menu__item">
                <a
                  href={item.href}
                  className="mobile-menu__link"
                  onClick={() => {
                    setMobileOpen(false);
                    setActiveHref(item.href);
                  }}
                >
                  {item.label}
                </a>
                {item.subItems && (
                  <div>
                    {item.subItems.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        className="mobile-menu__link"
                        style={{ paddingLeft: "24px" }}
                        onClick={() => {
                          setMobileOpen(false);
                          setActiveHref(sub.href);
                        }}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              variant="menu"
              onClick={() => {
                setMobileOpen(false);
                onCtaClick?.();
              }}
            >
              REQUEST A DEMO
            </Button>
          </nav>
        )}
      </header>
    </>
  );
}

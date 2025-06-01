"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../Buttons/Button";
import { Link } from "react-router-dom";
import "./Header.css";

type SafeNavItem = {
  label: string;
  href: string;
  isLive?: boolean;
  subItems?: SafeNavItem[];
};

type HeaderProps = {
  onCtaClick?: () => void;
};

const navItems: SafeNavItem[] = [
  {
    label: "PRODUCT",
    href: "#",
    isLive: true,
    subItems: [
      { label: "WISEflow", href: "#", isLive: false },
      { label: "WISEflow Originality", href: "/originality", isLive: true },
    ],
  },
  {
    label: "ABOUT",
    href: "#",
    isLive: true,
    subItems: [
      { label: "About UNIwise", href: "#", isLive: false },
      { label: "Blog", href: "#", isLive: false },
      { label: "Careers", href: "#", isLive: false },
    ],
  },

  {
    label: "EVENTS",
    href: "#",
    isLive: true,
    subItems: [
      { label: "WISEcon25", href: "#", isLive: false },
      { label: "To be announced", href: "#", isLive: false },
    ],
  },

  {
    label: "CONTACT",
    href: "#",
    isLive: true,
    subItems: [
      { label: "Service Center", href: "#", isLive: false },
      { label: "Partnering with UNIwise", href: "#", isLive: false },
      { label: "Get in touch", href: "#", isLive: false },
    ],
  },
];

export function Header({ onCtaClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("");
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleSubMenu = (label: string) => {
    setOpenMobileMenu((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 64) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setScrollDirection("up");
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    timeoutRef.current = setTimeout(() => {
      setScrollDirection("up");
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [lastScrollY]);

  useEffect(() => {
    const updateActive = () => {
      setActiveHref(window.location.hash || window.location.pathname);
    };
    updateActive();
    window.addEventListener("hashchange", updateActive);
    return () => window.removeEventListener("hashchange", updateActive);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const renderLink = (
    label: string,
    href: string,
    isLive?: boolean,
    onClick?: () => void,
    className: string = ""
  ) => {
    if (isLive) {
      return (
        <Link
          to={href}
          className={className}
          onClick={() => {
            setActiveHref(href);
            onClick?.();
          }}
          aria-current={href === activeHref ? "page" : undefined}
        >
          {label}
        </Link>
      );
    } else {
      return (
        <span
          className={`${className} nav__link--disabled`}
          title="Coming soon"
        >
          {label}
        </span>
      );
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header
        className={`header ${
          scrollDirection === "down" ? "header--hidden" : ""
        }`}
      >
        <div className="header__inner">
          <a href="/originality" className="header__logo">
            <img
              loading="lazy"
              src="/UNIwise_logo_white.webp"
              alt="UNIwise logo"
              className="header__logo-img"
            />
          </a>

          <nav className="nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <div key={item.href} className="nav__item">
                {renderLink(
                  item.label,
                  item.href,
                  item.isLive,
                  undefined,
                  "nav__link"
                )}
                {item.subItems && (
                  <div className="nav__submenu">
                    {item.subItems.map((sub) =>
                      renderLink(
                        sub.label,
                        sub.href,
                        sub.isLive,
                        undefined,
                        "nav__link"
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <Button
            variant="menu"
            className="cta-button"
            onClick={onCtaClick}
            aria-label="Request a demo"
          >
            REQUEST A DEMO
          </Button>

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

        {mobileOpen && (
          <nav className="mobile-menu" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <div key={item.href} className="mobile-menu__item">
                <div className="mobile-menu__row">
                  <div
                    className={`mobile-menu__link mobile-menu__link--main ${
                      !item.isLive ? "disabled" : ""
                    }`}
                    onClick={() => {
                      if (item.isLive) {
                        setMobileOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </div>
                  {item.subItems && (
                    <button
                      className="mobile-menu__toggle"
                      onClick={() => toggleSubMenu(item.label)}
                      aria-label="Toggle submenu"
                    >
                      {openMobileMenu === item.label ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>
                  )}
                </div>

                {item.subItems && openMobileMenu === item.label && (
                  <div className="mobile-submenu">
                    {item.subItems.map((sub) =>
                      sub.isLive ? (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="mobile-submenu__link"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ) : (
                        <span
                          key={sub.href}
                          className="mobile-submenu__link mobile-submenu__link--disabled"
                          title="Coming soon"
                        >
                          {sub.label}
                        </span>
                      )
                    )}
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

"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../Buttons/Button";
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
    label: "WISEFLOW",
    href: "#",
    subItems: [
      { label: "About WISEflow", href: "#", isLive: false },
      { label: "How it works", href: "#", isLive: false },
      { label: "Benefits of digital assessment", href: "#", isLive: false },
      { label: "Partnering with UNIwise", href: "#", isLive: false },
    ],
  },
  {
    label: "ORIGINALITY",
    href: "/originality",
    isLive: true,
  },
  {
    label: "RESOURCE HUB",
    href: "#",
    subItems: [
      { label: "Digital assessment hub", href: "#", isLive: false },
      { label: "Testimonials", href: "#testimonials", isLive: false },
      { label: "Events", href: "#", isLive: false },
      { label: "Blog", href: "/#blog-section", isLive: false },
      { label: "Service Centre", href: "#", isLive: false },
    ],
  },
  {
    label: "ABOUT",
    href: "#",
    subItems: [
      { label: "Vision", href: "#", isLive: false },
      { label: "Our story", href: "#", isLive: false },
      { label: "Where we work", href: "#", isLive: false },
      { label: "Careers", href: "#", isLive: false },
    ],
  },
  {
    label: "WISEcon25",
    href: "#",
    isLive: false,
  },
  {
    label: "CONTACT",
    href: "#",
    subItems: [{ label: "Get in touch", href: "#", isLive: false }],
  },
];

export function Header({ onCtaClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("");
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [lastScrollY, setLastScrollY] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      

      // Scroll ned → skjul header
      if (currentScrollY > lastScrollY && currentScrollY > 64) {
        setScrollDirection("down");
      }
      // Scroll op → vis header
      else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);

      // Inaktivitet: vis header efter 1s uden scroll
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setScrollDirection("up");
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);

    // 👇 Start inaktivitetstimer ved load (selv uden scroll)
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

  const renderLink = (
    label: string,
    href: string,
    isLive?: boolean,
    onClick?: () => void,
    className: string = ""
  ) => {
    if (isLive) {
      return (
        <a
          href={href}
          className={className}
          aria-current={href === activeHref ? "page" : undefined}
          onClick={(e) => {
            setActiveHref(href);
            onClick?.();
          }}
        >
          {label}
        </a>
      );
    } else {
      return (
        <a
          href="#"
          className={`${className} nav__link--disabled`}
          aria-disabled="true"
          onClick={(e) => e.preventDefault()}
          style={{ cursor: "not-allowed", opacity: 0.5 }}
        >
          {label}
        </a>
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
          <a href="/" className="header__logo">
            <img
              src="/UNIwise_logo_white.png"
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
                  <div className="nav__submenu" role="menu">
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
                {renderLink(
                  item.label,
                  item.href,
                  item.isLive,
                  () => setMobileOpen(false),
                  "mobile-menu__link"
                )}
                {item.subItems && (
                  <div>
                    {item.subItems.map((sub) =>
                      renderLink(
                        sub.label,
                        sub.href,
                        sub.isLive,
                        () => setMobileOpen(false),
                        "mobile-menu__link"
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

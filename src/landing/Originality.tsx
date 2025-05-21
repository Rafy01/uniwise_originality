// src/landing/Originality.tsx
import React from "react";
import { Header } from "../components/header/Header";
import { NavItem } from "@/components/header/Header.types";
import { Button } from "@/components/buttons/Button";

const navItems: NavItem[] = [
  { label: "WISEFLOW", href: "#wiseflow" },
  {
    label: "ORIGINALITY",
    href: "#originality",
    subItems: [
      { label: "Features", href: "#features" },
      { label: "Cases", href: "#cases" },
    ],
  },
  { label: "RESOURCES", href: "#resources" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function OriginalityPage() {
  return (
    <>
      <Header navItems={navItems} onCtaClick={() => alert("Demo requested!")} />
      <main id="main-content">
        {/* Dit landingsside-indhold her */}
        <a> hallo there </a>
        <Button variant="primary" onClick={() => alert("Primær!")}>
          Read more
        </Button>

        <Button variant="secondary" type="button">
          Blog
        </Button>

        <Button variant="menu">Request a demo</Button>
      </main>
    </>
  );
}

// src/landing/Originality.tsx
import React from "react";
import { Header } from "../components/header/header";
import { NavItem } from "@/components/header/header.types";

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
      <main id="main-content">{/* Dit landingsside-indhold her */}
      <a> hallo there     </a>

      </main>
    </>
  );
}

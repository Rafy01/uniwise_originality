// src/landing/Originality.tsx
import React from "react";
import { Header } from "../../components/header/Header";
import { NavItem } from "@/components/header/Header.types";
import { Button } from "@/components/Buttons/Button";
import { Typography } from "@/components/Typography/Typography";
import { Footer } from "@/components/Footer/Footer";

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
        <Button variant="primary" onClick={() => alert("Primær!")}>
          Read more
        </Button>

        <Button variant="secondary" type="button">
          Blog
        </Button>

        <Typography variant="h1">Titel / Hero</Typography>
        <Typography variant="h2">Sektionstitel</Typography>
        <Typography variant="h3">Undersektion</Typography>
        <Typography variant="h4">Cards / Bokstitel</Typography>
        <Typography variant="body">
          Her er noget brødtekst i 18pt med 24pt line-height.
        </Typography>
      </main>
    </>
  );
}

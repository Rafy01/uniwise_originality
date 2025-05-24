// src/landing/Originality.tsx

import React from "react";

import { Header } from "@/components/Header/Header";
import { NavItem } from "@/components/Header/Header.types";
import { Button } from "@/components/Buttons/Button";
import { Typography } from "@/components/Typography/Typography";
import { Usp } from "@/components/Usp/Usp";
import { Footer } from "@/components/Footer/Footer";
import "./Originality.css";
import { SectionSplitter } from "@/components/SectionSplitter/SectionSplitter";
import { Accordion } from "@/components/Accordion/Accordion";
import { testimonials } from "@/data/testimonials";
import { BlogSection } from "@/components/Sections/BlogSections";

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
      <main id="main-content" className="originality">
        {/* Hero Section */}
        <section className="hero" aria-labelledby="hero-title" tabIndex={0}>
          <span className="sr-only" id="hero-desc">
            This section introduces WISEflow Originality and includes
            call-to-action buttons.
          </span>

          <img
            src="/hero_image.png"
            alt=""
            aria-hidden="true"
            className="hero-bg"
          />

          <div className="hero-overlay">
            <div className="hero-inner">
              <Typography variant="h1" id="hero-title">
                Built-in originality. Trusted by universities.
              </Typography>
              <Typography variant="h2">
                <strong>WISEflow Originality</strong> is the AI-supported
                plagiarism check that protects academic integrity — directly
                inside your existing exam flow.
              </Typography>
              <div className="hero-buttons">
                <Button variant="primary">Request a demo</Button>
                <Button variant="secondary">Blog</Button>
              </div>
            </div>
          </div>
        </section>
        <div className="body">
          <Usp />
          <SectionSplitter />

          <section
            id="testimonials"
            className="testimonials-section"
            tabIndex={0}
          >
          <div className="testimonials-inner">
              {/* Venstre kolonne  – billede */}
              <figure className="testimonials-image">
                <img
                  src={"/Exams_uniwise.jpg"}
                  alt="Students taking digital exams with WISEflow"
                />
              </figure>

              {/* Højre kolonne – overskrift + accordion */}
              <div className="testimonials-content">
                <Typography variant="h2" className="testimonials-heading">
                  Testimonials
                </Typography>

                <Accordion items={testimonials} />
              </div>
            </div>
          </section>
          <br></br>
          <SectionSplitter />
          <br></br>
          <section id="BlogSection" className="blog-section" tabIndex={0}>
            <BlogSection />
          </section>
          <br></br>
          <SectionSplitter />
          <br></br>
        </div>
      </main>
      <section id="Footer" className="footer-section" tabIndex={0}>
        <Footer />
      </section>
    </>
  );
}

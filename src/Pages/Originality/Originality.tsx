import React from "react";

import { Header } from "@/components/Header/Header";
import { Button } from "@/components/Buttons/Button";
import { Typography } from "@/components/Typography/Typography";
import { Usp } from "@/components/Usp/Usp";
import { Footer } from "@/components/Footer/Footer";
import "./Originality.css";
import { SectionSplitter } from "@/components/SectionSplitter/SectionSplitter";
import { Accordion } from "@/components/Accordion/Accordion";
import { testimonials } from "@/data/testimonials";
import { BlogSection } from "@/components/Sections/BlogSections";

export default function OriginalityPage() {
  return (
    <>
      <Header />
      {/* ----- Main content ----- */}
      <main id="main-content" className="originality">
        {/* Hero Section */}
        <section className="hero" aria-labelledby="hero-title" tabIndex={0}>
          <span className="sr-only" id="hero-desc">
            This section introduces WISEflow Originality and includes
            call‑to‑action buttons.
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
                {/* Use anchor semantics for navigation */}
                {/* @ts-ignore – `as` prop depends on Button implementation */}
                <Button href="#blog-section" variant="secondary">
                  Blog
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* USP Section */}
        <section
          aria-label="Unique selling points"
          id="usp-section"
          className="testimonials-section"
          tabIndex={0}
        >
          <Usp />
        </section>

        <SectionSplitter />

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="testimonials-section"
          aria-labelledby="testimonials-heading"
          tabIndex={0}
        >
          <div className="testimonials-inner">
            {/* Left column – image */}
            <figure className="testimonials-image">
              <img
                src="/Exams_uniwise.jpg"
                alt="Students taking a digital exam with WISEflow"
              />
              <figcaption className="sr-only">
                Example of WISEflow in use during an exam.
              </figcaption>
            </figure>

            {/* Right column – heading + accordion */}
            <div className="testimonials-content">
              <Typography
                variant="h2"
                id="testimonials-heading"
                className="testimonials-heading"
              >
                Testimonials
              </Typography>

              <Accordion items={testimonials} />
            </div>
          </div>
        </section>

        <SectionSplitter />

        {/* Blog Section */}
        <section
          id="blog-section"
          className="blog-section"
          aria-labelledby="blog-heading"
          tabIndex={0}
        >
          <Typography variant="h2" id="blog-heading" className="sr-only">
            Blog
          </Typography>
          <BlogSection />
        </section>
      </main>

      {/* ----- Footer ----- */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

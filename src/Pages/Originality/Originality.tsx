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

          {/* Testimonials Section */}
          <section
            className="testimonials"
            aria-labelledby="testimonials-heading"
            aria-describedby="testimonials-desc"
            tabIndex={0}
          >
            <Typography variant="h2" id="testimonials-heading">
              Testimonials
            </Typography>
            <Typography variant="body" id="testimonials-desc">
              Real feedback from institutions who use WISEflow Originality.
            </Typography>
            <blockquote>
              <Typography variant="body">
                "Seamless LMS integration and strong academic integrity –
                exactly what we needed."
              </Typography>
              <footer>
                <Typography variant="body">
                  Universidade Aberta – Portugal
                </Typography>
              </footer>
            </blockquote>
            <ul>
              <li>The Arctic University – Tromsø, Norway</li>
              <li>The Open University – Milton Keynes, UK</li>
              <li>University of Portsmouth – Portsmouth, UK</li>
              <li>Bucerius Law School – Hamburg, Germany</li>
            </ul>
          </section>

          {/* Insights Section */}
          <section
            className="insights"
            aria-labelledby="insights-title"
            aria-describedby="insights-desc"
            tabIndex={0}
          >
            <Typography variant="h2" id="insights-title">
              Why Do Students Plagiarise
            </Typography>
            <Typography variant="body" id="insights-desc">
              Learn the motivations behind plagiarism and how to address them
              proactively.
            </Typography>
            <Button variant="primary">Read more</Button>
          </section>

          {/* Cards Section */}
          <section
            className="cards"
            aria-labelledby="resources-title"
            aria-describedby="resources-desc"
            tabIndex={0}
          >
            <Typography variant="h2" id="resources-title">
              Resources
            </Typography>
            <Typography variant="body" id="resources-desc">
              Practical guidance for educators to prevent and respond to
              plagiarism.
            </Typography>
            <div className="card">
              <Typography variant="h4">
                Help Students Before They Plagiarise
              </Typography>
              <Typography variant="body">
                Explore why students plagiarise – and how educators can act
                early to prevent it.
              </Typography>
              <Button variant="secondary">Read more</Button>
            </div>
            <div className="card">
              <Typography variant="h4">
                How to Prevent Plagiarism in Education
              </Typography>
              <Typography variant="body">
                Get practical tips on how to guide students away from plagiarism
                through clear expectations, feedback, and tools.
              </Typography>
              <Button variant="secondary">Read more</Button>
            </div>
            <div className="card">
              <Typography variant="h4">
                5 Smart Tips to Stay Original
              </Typography>
              <Typography variant="body">
                Avoid plagiarism with student-approved strategies. From citing
                to writing with confidence.
              </Typography>
              <Button variant="secondary">Read more</Button>
            </div>
          </section>

          {/* CTA Footer Section */}
          <section
            className="cta-footer"
            aria-labelledby="cta-title"
            aria-describedby="cta-desc"
            tabIndex={0}
          >
            <Typography variant="h2" id="cta-title">
              Want to see WISEflow Originality in action?
            </Typography>
            <Typography variant="body" id="cta-desc">
              Book a personal demonstration and see it in context.
            </Typography>
            <Button variant="primary">Book demo</Button>
          </section>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}

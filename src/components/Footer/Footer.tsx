import React from "react";
import Link from "next/link";
import { Button } from "../Buttons/Button";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__cta">
        <img
          src="/logo-uniwise.svg"
          alt="UNIwise logo"
          className="footer__logo"
        />
        <div className="footer__cta-text">
          <h2>Want to see WISEflow Originality in action?</h2>
          <div className="footer__cta-buttons">
            <Button variant="primary" className="footer__demo-btn">
              Book demo
            </Button>
            <a
              href="https://www.linkedin.com/company/uniwise"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__linkedin"
              aria-label="Follow us on LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__nav-grid">
        <nav className="footer__col">
          <h3>Product</h3>
          <Link href="/wiseflow">
            <a>WISEflow</a>
          </Link>
          <Link href="/originality">
            <a>Originality</a>
          </Link>
          <Link href="/features">
            <a>Features</a>
          </Link>
          <Link href="/integrations">
            <a>Integrations</a>
          </Link>
        </nav>

        <nav className="footer__col">
          <h3>Resources</h3>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/whitepapers">
            <a>Whitepapers</a>
          </Link>
          <Link href="/case-studies">
            <a>Case Studies</a>
          </Link>
          <Link href="/webinars">
            <a>Webinars</a>
          </Link>
        </nav>

        <nav className="footer__col">
          <h3>About UNIwise</h3>
          <Link href="/about">
            <a>About Us</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/careers">
            <a>Careers</a>
          </Link>
          <Link href="/press">
            <a>Press</a>
          </Link>
        </nav>

        <nav className="footer__col">
          <h3>Legal & Security</h3>
          <Link href="/privacy">
            <a>Privacy & Cookies</a>
          </Link>
          <Link href="/data-security">
            <a>Data Security</a>
          </Link>
          <Link href="/accessibility">
            <a>Accessibility</a>
          </Link>
        </nav>
      </div>

      <div className="footer__bottom">
        Bredskifte Alle 15, 1.tv, 8210 Aarhus V, Denmark &nbsp;|&nbsp; Bartle
        House, 9 Oxford Court, Manchester, M2 3WQ, United Kingdom
      </div>
    </footer>
  );
};

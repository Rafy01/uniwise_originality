/* ---------- Footer.tsx ---------- */
import { Linkedin } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/Buttons/Button";

import "./Footer.css";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={clsx("footer", className)}>
      {/* Top-row ------------------------------------------------------- */}
      <div className="footer__top">
        <div className="footer__logo">
          <img src="/logo-square.svg" alt="UNIwise logo" />
          <span>UNIwise</span>
        </div>

        <div className="footer__cta">
          <h2>
            Want to see WISEflow&nbsp;Originality
            <br />
            in&nbsp;action?
          </h2>

          <div className="footer__cta-buttons">
            <Button variant="primary">
              Book demo
            </Button>
            <a
              href="https://www.linkedin.com/company/uniwise"
              aria-label="UNIwise on LinkedIn"
              className="footer__linkedin"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Link-grid ---------------------------------------------------- */}
      <nav className="footer__links">
        <div className="footer__col">
          <h3>Product</h3>
          <ul>
            <li>
              <a href="#">WISEflow</a>
            </li>
            <li>
              <a href="#">Originality</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Whitepapers</a>
            </li>
            <li>
              <a href="#">Case Studies</a>
            </li>
            <li>
              <a href="#">Webinars</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3>About UNIwise</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3>Legal &amp; Security</h3>
          <ul>
            <li>
              <a href="#">Privacy &amp; Cookies</a>
            </li>
            <li>
              <a href="#">Data Security</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Bottom-bar --------------------------------------------------- */}
      <small className="footer__bottom">
        Bredskifte Alle 15, 1.tv, 8210 Aarhus V, Denmark
        <span className="pipe" />
        Bartle House, 9 Oxford Court, Manchester, M2 3WQ, United Kingdom
      </small>
    </footer>
  );
}

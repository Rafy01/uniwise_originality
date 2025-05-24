/* ---------- Footer.tsx ---------- */
import clsx from "clsx";
import { Icon } from "semantic-ui-react";
import { Button } from "@/components/Buttons/Button";
import { Typography } from "@/components/Typography/Typography";

import "./Footer.css";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={clsx("footer", className)}>
      {/* Top row ----------------------------------------------------- */}
      <div className="footer__top">
        <div className="footer__logo">
          <img src="/logo-square.png" alt="UNIwise logo" />
        </div>

        <div className="footer__cta">
          <Typography variant="h2">
            Want to see WISEflow Originality in action?
          </Typography>

          <div className="footer__cta-buttons">
            <Button variant="primary">Book demo</Button>

            {/* LinkedIn-ikon link – samme variant som andre footer links */}
            <Typography variant="link-secondary">
              <a
                href="https://www.linkedin.com/company/uniwise"
                aria-label="UNIwise on LinkedIn"
              >
                <Icon name="linkedin" size="large" />
              </a>
            </Typography>
          </div>
        </div>
      </div>

      {/* Link grid --------------------------------------------------- */}
      <nav className="footer__links">
        <div className="footer__col">
          <Typography variant="h2">Product</Typography>
          <ul>
            {["WISEflow", "Originality", "Features", "Integrations"].map(
              (txt) => (
                <li key={txt}>
                  <Typography variant="link-secondary">
                    <a href="#">{txt}</a>
                  </Typography>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="footer__col">
          <Typography variant="h2">Resources</Typography>
          <ul>
            {["Blog", "Whitepapers", "Case Studies", "Webinars"].map((txt) => (
              <li key={txt}>
                <Typography variant="link-secondary">
                  <a href="#">{txt}</a>
                </Typography>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <Typography variant="h2">About UNIwise</Typography>
          <ul>
            {["About Us", "Contact", "Careers", "Press"].map((txt) => (
              <li key={txt}>
                <Typography variant="link-secondary">
                  <a href="#">{txt}</a>
                </Typography>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <Typography variant="h2">Legal & Security</Typography>
          <ul>
            {["Privacy & Cookies", "Data Security", "Accessibility"].map(
              (txt) => (
                <li key={txt}>
                  <Typography variant="link-secondary">
                    <a href="#">{txt}</a>
                  </Typography>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      {/* Bottom bar -------------------------------------------------- */}
      <small className="footer__bottom">
        Bredskifte Alle&nbsp;15, 1.tv, 8210 Aarhus V, Denmark
        <span className="pipe" />
        Bartle House, 9 Oxford Court, Manchester, M2&nbsp;3WQ,
        United&nbsp;Kingdom
      </small>
    </footer>
  );
}

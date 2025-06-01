/* ---------- Footer.tsx ---------- */
import clsx from "clsx";
import { Button } from "@/components/Buttons/Button";
import { Typography } from "@/components/Typography/Typography";

import "./Footer.css";
import { SectionSplitter } from "../SectionSplitter/SectionSplitter";
import { FaLinkedin } from "react-icons/fa";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={clsx("footer", className)}>
      <SectionSplitter />
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
            <Typography
              variant="link-secondary"
              href="https://www.linkedin.com/company/uniwise"
              aria-label="UNIwise on LinkedIn"
            >
              <span className="sr-only">UNIwise on LinkedIn</span>
              <FaLinkedin
                size={20}
                aria-hidden="true"
                className="footer__linkedin"
              />
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
              (txt) => {
                const href = txt === "Originality" ? "/originality" : "/#";
                return (
                  <li key={txt}>
                    <Typography variant="link-secondary" href={href}>
                      {txt}
                    </Typography>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        <div className="footer__col">
          <Typography variant="h2">Resources</Typography>
          <ul>
            {["Blog", "Whitepapers", "Case Studies", "Webinars"].map((txt) => (
              <li key={txt}>
                <Typography variant="link-secondary" href="/#">
                  {txt}
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
                <Typography variant="link-secondary" href="/#">
                  {txt}
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
                  <Typography variant="link-secondary" href="/#">
                    {txt}
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

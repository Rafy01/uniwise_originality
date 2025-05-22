import React from "react";
import { Typography } from "@/components/Typography/Typography";
import "./Usp.css";

export function Usp() {
  return (
    <section className="usp-section" aria-labelledby="usp-heading">
      <Typography variant="h2" id="usp-heading" className="sr-only">
        Unique selling points of WISEflow Originality
      </Typography>
      <div className="usp-grid">
        <div className="usp-item">
          <Typography variant="h3">
            Detect paraphrasing, not just copy-paste.
          </Typography>
          <Typography variant="body">
            AI-powered analysis identifies semantic similarity, rewriting, and
            unusual writing styles.
          </Typography>
        </div>
        <div className="usp-item">
          <Typography variant="h3">-----</Typography>
          <Typography variant="body">
            No switching platforms — assessors get a full originality view in
            context.
          </Typography>
        </div>
        <div className="usp-item">
          <Typography variant="h3">Custom matching & collaboration.</Typography>
          <Typography variant="body">
            Compare with licensed sources, internal submissions, or other
            institutions.
          </Typography>
        </div>
      </div>
    </section>
  );
}

import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Buttons/Button";
import clsx from "clsx";
import "./Card.css";

export type CardProps = {
  title: string;
  excerpt: string;
  cta: { label: string; href: string; "aria-label"?: string };
  className?: string;
};

export function Card({ title, excerpt, cta, className }: CardProps) {
  return (
    <article className={clsx("blog-card", className)}>
      <Typography variant="h4">
        <h3 className="blog-card__title">{title}</h3>
      </Typography>

      <Typography variant="body" className="blog-card__excerpt">
        {excerpt}
      </Typography>

      <Button
        className="accordion-inner-cta"
        variant="primary"
        href={cta.href}
        aria-label={`Read more: ${title}`}
      >
        {cta.label}

      </Button>
    </article>
  );
}

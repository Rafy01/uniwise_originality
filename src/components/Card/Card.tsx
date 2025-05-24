import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Buttons/Button";
import clsx from "clsx";
import "./Card.css";

export type CardProps = {
  title: string;
  excerpt: string;
  cta: { label: string; href: string };
  className?: string;
};

export function Card({ title, excerpt, cta, className }: CardProps) {
  return (
    <article className={clsx("blog-card", className)}>
      <header>
        <Typography variant="h4" >
          <h3 className="blog-card__title">{title}</h3>
        </Typography>
      </header>

      <Typography variant="body" className="blog-card__excerpt">
        {excerpt}
      </Typography>

      <Button variant="primary" className="blog-card__cta">
        <a href={cta.href}>{cta.label}</a>
      </Button>
    </article>
  );
}

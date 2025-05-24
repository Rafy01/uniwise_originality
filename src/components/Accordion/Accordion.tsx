/* ────────────── src/components/Accordion/Accordion.tsx ────────────── */
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Buttons/Button";

import "./Accordion.css";

/* ---------- Typer ---------- */
export type AccordionItem = {
  value: string;
  title: string;
  content: string;
  author?: string;
  cta: { label: string; href: string };
};

type AccordionProps = {
  items: AccordionItem[];
  defaultValue?: string;
  className?: string;
};

/* ---------- Komponent ---------- */
export function Accordion({
  items,
  defaultValue = items[0]?.value,
  className,
}: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      type="single"
      defaultValue={defaultValue}
      collapsible={false}
      className={clsx("accordion-root", className)}
    >
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.value}
          value={item.value}
          className="accordion-item"
        >
          {/* ---------- Header & Trigger ---------- */}
          <AccordionPrimitive.Header className="accordion-header">
            <AccordionPrimitive.Trigger className="accordion-trigger">
              <span className="accordion-title-wrapper">
                <Typography variant="h3" className="accordion-title-open">
                  {item.title}
                </Typography>

                <Typography variant="h4" className="accordion-title-closed">
                  {item.title}
                </Typography>
              </span>

              <ChevronDown className="accordion-chevron" aria-hidden />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          {/* ---------- Collapsible content ---------- */}
          <AccordionPrimitive.Content
            className="accordion-content"
            tabIndex={0}
          >
            <div className="accordion-content__inner">
              <Typography variant="body" className="accordion-quote">
                {item.content}
              </Typography>

              {item.author && (
                <Typography variant="body" className="accordion-author">
                  — {item.author}
                </Typography>
              )}

              <Button className="accordion-inner-cta" variant="primary">
                {item.cta.label}
              </Button>
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}

import { ReactNode } from "react";

export type BlogCard = {
  title: string;
  excerpt: string;
  cta: {
    label: string;
    href: string;
  };
  date?: string;
  content?: ReactNode;
  tags?: string[];
  imageUrl?: string;
};

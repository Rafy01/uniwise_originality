// src/components/header/header.types.ts
export type NavSubItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  subItems?: NavSubItem[];
};

export type HeaderProps = {
  navItems: NavItem[];
  onCtaClick?: () => void;
};

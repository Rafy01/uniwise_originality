export type SafeNavItem = {
  label: string;
  href: string;
  isLive?: boolean;
  subItems?: SafeNavItem[];
};

export type HeaderProps = {
  navItems: SafeNavItem[];
  onCtaClick?: () => void;
};

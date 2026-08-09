export interface NavItem {
  label: string;
  href: string;
}

export interface PageSectionProps {
  title: string;
  eyebrow?: string;
  description?: string;
  children?: React.ReactNode;
}

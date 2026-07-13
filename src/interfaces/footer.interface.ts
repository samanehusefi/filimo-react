export interface FooterLink {
  id: number;
  title: string;
  href: string;
  type: "internal" | "external" | "dropdown";
  icon?: string | null;
  position?: "right" | "left";
  children?: FooterLinkChild[];
}

export interface FooterLinkChild {
  title: string;
  href: string;
  type: "internal" | "external";
  icon?: string;
}
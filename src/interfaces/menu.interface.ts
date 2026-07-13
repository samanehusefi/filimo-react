export interface SubMenuItem {
  id: number;
  title: string;
  href: string;
  priority: number;
}

export interface MenuItem {
  id: number;
  title: string;
  href?: string;
  priority: number;
  hasMegaMenu: boolean;
  children?: SubMenuItem[];
}

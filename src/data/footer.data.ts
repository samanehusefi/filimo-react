import type { FooterLink } from "@/interfaces/IFooter";

export const footerMenuLinks: FooterLink[] = [
  {
    id: 0,
    title: "تماشا‌ با تلویزیون",
    href: "/tv/?itm_source=bigscrren-footer-link",
    type: "internal",
    icon: "ui-icon-tv",
    position: "right",
  },
  {
    id: 1,
    title: "اپلیکیشن‌ها",
    href: "/app",
    type: "internal",
    icon: "",
    position: "right",
  },
  {
    id: 2,
    title: "تماس و پشتیبانی",
    href: "https://filimo.goposhti.com",
    type: "external",
    icon: "",
    position: "right",
  },
  {
    id: 3,
    title: "فروشگاه",
    href: "/showroom",
    type: "internal",
    icon: "",
    position: "right",
  },
  {
    id: 4,
    title: "سایر لینک‌ها",
    href: "",
    type: "dropdown",
    icon: null,
    position: "right",
    children: [
      {
        title: "قوانین",
        href: "/term",
        type: "internal",
      },
      {
        title: "به ما بپیوندید",
        href: "https://job.sabaidea.com/",
        type: "external",
      },
      {
        title: "تبلیغات در فیلیمو",
        href: "/advertise",
        type: "internal",
      },
      {
        title: "لوگو",
        href: "/logo",
        type: "internal",
      },
      {
        title: "دانلود فیلم و سریال",
        href: "/download-movies",
        type: "internal",
      },
    ],
  },
  {
    id: 5,
    title: "شبکه‌های اجتماعی",
    href: "",
    type: "dropdown",
    icon: null,
    position: "left",
    children: [
      {
        title: "آپارات",
        href: "http://www.aparat.com/filimo",
        type: "external",
        icon: "icon-aparat",
      },
      {
        title: "تلگرام",
        href: "https://www.telegram.me/filimo",
        type: "external",
        icon: "icon-telegram",
      },
      {
        title: "توییتر",
        href: "https://twitter.com/Filimocom",
        type: "external",
        icon: "icon-twitter",
      },
      {
        title: "اینستاگرام",
        href: "https://instagram.com/filimocom/",
        type: "external",
        icon: "icon-instagram",
      },
    ],
  },
];
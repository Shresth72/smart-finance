import type { FooterItem, MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

const links = {
  github: "https://github.com/Shresth72/smart-finance",
};

export const siteConfig = {
  name: "Smart Finance Service",
  description:
    "An open source for banking solutions that works for you in an easy way!",
  url: "https://smart-finance.com",
  ogImage: "",
  mainNav: [
    {
      title: "Home",
      items: [
        {
          title: "Products",
          href: "/products",
          description: "All the products we have to offer.",
          items: [],
        },
        {
          title: "Pricing",
          href: "/pricing",
          description: "Check out all the pricings for our services.",
          items: [],
        },
        {
          title: "Services",
          href: "/services",
          description: "Check out latest services to out clients.",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
  links,
  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "shadcn/ui",
          href: "https://ui.shadcn.com",
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};

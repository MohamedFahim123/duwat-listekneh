export type ORDER_WAY = {
  key: string;
  iconSrc: string;
  href: {
    en: string;
    ar: string;
  };
  variant?: "primary" | "secondary";
};

export const ORDER_WAYS: ORDER_WAY[] = [
  {
    key: "talabat",
    iconSrc: "/images/logos/talabat.webp",
    href: {
      en: "https://www.talabat.com/",
      ar: "https://www.talabat.com/ar/",
    },
    variant: "primary",
  },
  // {
  //   key: "careem",
  //   iconSrc: "/images/logos/careem.webp",
  //   href: {
  //     en: "https://www.careem.com/",
  //     ar: "https://www.careem.com/ar-ae/",
  //   },
  // },
  // {
  //   key: "keeta",
  //   iconSrc: "/images/logos/keeta.webp",
  //   href: {
  //     en: "https://www.keeta.com/",
  //     ar: "https://www.keeta.com/ar/",
  //   },
  // },
];

"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container/Container";
import { useOrderModal } from "../layout/OrderModalProvider/OrderModalProvider";

export default function Navbar() {
  const { open } = useOrderModal();
  const locale = useLocale();
  const t = useTranslations("navbar");

  const switchLocale = locale === "ar" ? "en" : "ar";
  const isArabic = locale === "ar";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <Container className="h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/images/logo.webp"
            alt="Duwat Lstikneh"
            width={36}
            height={36}
            loading="eager"
            className="h-auto w-auto"
          />
          <span className="text-white font-semibold text-xs sm:text-sm tracking-wide">
            {t("title")}
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={open}
            className="
              rounded-full 
              bg-[#C59D5F] 
              px-3 py-2 
              sm:px-5 sm:py-2.5
              text-xs sm:text-sm 
              font-semibold 
              text-black 
              transition 
              hover:opacity-90
            "
          >
            {t("order")}
          </button>

          <Link
            href={`/${switchLocale}`}
            className="
              rounded-full 
              flex items-center gap-1.5
              border border-white/20 
              px-2.5 py-2 
              sm:px-3 sm:py-2
              text-[10px] sm:text-xs 
              text-white 
              hover:bg-white/10 
              transition
            "
          >
            <Image
              src="/images/icons/toggle.webp"
              alt="Toggle language"
              width={9}
              height={9}
              className="opacity-80 h-auto w-auto"
            />
            {isArabic ? "EN" : "AR"}
          </Link>
        </div>
      </Container>
    </header>
  );
}

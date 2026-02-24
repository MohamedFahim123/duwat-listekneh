"use client";

import { SETTINGS } from "@/app/data/Settings";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container/Container";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative w-[38px] h-[32px]">
                <Image
                  src="/images/logo.webp"
                  alt="Duwat Lstikneh"
                  fill
                  sizes="36px"
                  priority={false}
                />
              </div>
              <span className="font-semibold text-lg">{t("title")}</span>
            </div>
            <p className="mt-4 text-md text-white/60">{t("tagline")}</p>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">{t("order")}</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href={SETTINGS.careemUrl} target="_blank">
                  {t("careem")}
                </Link>
              </li>
              <li>
                <Link href={SETTINGS.talabatUrl} target="_blank">
                  {t("talabat")}
                </Link>
              </li>
              <li>
                <Link href={SETTINGS.keetaUrl} target="_blank">
                  {t("keeta")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">{t("menu")}</h3>
            <Link
              href={SETTINGS.menuUrl}
              className="text-sm flex gap-2 text-white/60 hover:text-white transition"
            >
              <div className="relative w-4 h-4">
                <Image
                  src="/images/icons/link.webp"
                  alt="View Menu"
                  fill
                  sizes="16px"
                  loading="lazy"
                  
                />
              </div>
              {t("viewMenu")}
            </Link>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">{t("contact")}</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-2">
                <Link
                  href={SETTINGS.instagramUrl}
                  target="_blank"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition"
                >
                  <div className="relative w-[15px] h-[15px]">
                    <Image
                      src="/images/icons/instagram.webp"
                      alt="Instagram"
                      fill
                      sizes="15px"
                      loading="lazy"
                    />
                  </div>
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/50 pt-6 text-center text-sm text-white/60">
          © 2026 {t("title")}. {t("rights")}
        </div>
      </Container>
    </footer>
  );
}

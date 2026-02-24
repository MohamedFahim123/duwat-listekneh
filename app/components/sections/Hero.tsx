"use client";

import { SETTINGS } from "@/app/data/Settings";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container/Container";
import Section from "../layout/Section/Section";
import styles from "./sections.module.css";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <Section
      size="lg"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero_bg-image.webp"
          alt="Food background"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/80" />
      </div>

      <Container
        className={`flex justify-between min-h-[500px] items-center gap-10 ${styles.heroContainer}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            {t("title")}
          </h1>

          <p className="mt-4 text-white/70 text-sm sm:text-base max-w-md">
            {t("description")}
          </p>

          <div className="mt-6">
            <div className="text-xs text-white/50 tracking-widest mb-3">
              {t("orderNow")}
            </div>

            <div className="flex flex-wrap gap-3">
              <OrderPill label="Talabat" icon="/images/logos/talabat.webp" />
              {/* <OrderPill label="Careem" icon="/images/logos/careem.webp" /> */}
              {/* <OrderPill label="Keeta" icon="/images/logos/keeta.webp" /> */}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={SETTINGS.menuUrl}
              className="flex items-center gap-2 border border-white/20 px-5 py-3 rounded-full text-sm text-white hover:bg-white/10 transition"
            >
              {t("viewMenu")}
            </Link>
          </div>

          <p className="mt-6 text-[10px] text-white/40 max-w-sm">{t("note")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className={`relative w-full max-w-lg max-h-[600px] rounded-xl overflow-hidden mx-auto lg:mx-0`}
        >
          <Image
            src="/images/hero/hero-image.webp"
            alt="Hero"
            priority
            width={600}
            height={400}
            className="object-cover shadow-2xl"
          />
        </motion.div>
      </Container>
    </Section>
  );
}

function OrderPill({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="flex items-center gap-2 bg-white text-black text-xs font-medium px-4 py-2 rounded-full shadow hover:scale-105 transition cursor-pointer">
      <Image src={icon} alt={label} width={14} height={14} />
      {label}
    </div>
  );
}

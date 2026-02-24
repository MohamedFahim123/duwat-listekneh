"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Section from "../layout/Section/Section";
import Container from "../layout/Container/Container";
import { motion } from "framer-motion";

export default function AboutSection() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <Section className="bg-[#f3f3f3] py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/simple/simple-image.webp"
              alt="Emirati interior"
              fill
              loading="lazy"
              sizes="(max-width: 500px)"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-semibold text-black leading-tight"
            >
              {t("title")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-black/70 text-sm sm:text-base leading-relaxed"
            >
              {t("p1")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true }}
              className="mt-4 text-black/70 text-sm sm:text-base leading-relaxed"
            >
              {t("p2")}
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

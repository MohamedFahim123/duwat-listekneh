"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Section from "../layout/Section/Section";
import Container from "../layout/Container/Container";
import { SIGNATURE_ITEMS } from "@/app/data/signature";
import { motion } from "framer-motion";

export default function SignatureSection() {
  const t = useTranslations("signature");
  const locale = useLocale();

  return (
    <Section className="bg-black py-20">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl font-semibold text-white mb-14"
        >
          {t("title")}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SIGNATURE_ITEMS.map((item) => (
            <motion.div
              key={item.key}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl bg-[#111]"
            >
              <div className="relative h-[260px] w-full">
                <Image
                  src={item.image}
                  alt={item.key}
                  loading="lazy"
                  sizes="(max-width: 600px)"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-0 p-5 w-full">
                {item.isAction ? (
                  <Link
                    href={`/${locale}/menu`}
                    className="inline-block rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20"
                  >
                    {t(`items.${item.key}.button`)}
                  </Link>
                ) : (
                  <>
                    <h3 className="text-sm font-semibold text-white">
                      {t(`items.${item.key}.title`)}
                    </h3>
                    <p className="mt-1 text-xs text-white/60">
                      {t(`items.${item.key}.desc`)}
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

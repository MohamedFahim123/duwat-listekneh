"use client";

import { ORDER_WAYS } from "@/app/data/orderWays";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container/Container";
import Section from "../layout/Section/Section";

export default function OrderSection({ locale }: { locale: string }) {
  const t = useTranslations("orderSection");

  return (
    <Section size="lg" className="flex items-center overflow-hidden">
      <Container className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
        >
          {t("title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-black/70 text-sm sm:text-base max-w-md mx-auto"
        >
          {t("description")}
        </motion.p>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
              },
            },
          }}
          className="flex gap-3 items-center justify-center mt-10 flex-wrap"
        >
          {ORDER_WAYS.map((way) => (
            <motion.li
              key={way.key}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 bg-black rounded-lg px-4 py-2"
            >
              <Link
                href={way.href[locale as keyof typeof way.href]}
                target="_blank"
                className="flex items-center gap-2"
              >
                <div className="relative w-[15px] h-[15px]">
                  <Image
                    fill
                    sizes="15px"
                    src={way.iconSrc}
                    alt={`${way.key} logo`}
                    className="w-6 h-6 rounded-full object-contain"
                  />
                </div>

                <span className="text-white text-sm font-medium">
                  {t(`ways.${way.key}.label`)}
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
}

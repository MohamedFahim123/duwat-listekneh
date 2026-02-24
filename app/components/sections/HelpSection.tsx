"use client";

import { SETTINGS } from "@/app/data/Settings";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Container from "../layout/Container/Container";
import Section from "../layout/Section/Section";
import { motion } from "framer-motion";

export default function HelpSection() {
  const t = useTranslations("help");

  return (
    <Section className="bg-[#f3f3f3] py-20">
      <Container className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-semibold text-black"
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
          className="mt-6 text-black/70 text-sm space-y-2"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {t("phone")} {SETTINGS.phoneNumber}
          </motion.p>

          {/* <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {t("whatsapp")} {SETTINGS.whatsappNumber}
          </motion.p> */}

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {t("instagram")} {SETTINGS.instagramUsername}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4,
              },
            },
          }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -3 }}
          >
            <Link
              href={`tel:${SETTINGS.phoneNumber}`}
              className="px-5 py-2 rounded-full bg-black text-white text-sm hover:bg-black/80 transition"
            >
              {t("call")}
            </Link>
          </motion.div>

          {/* <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -3 }}
          >
            <Link
              href={`https://wa.me/${SETTINGS.whatsappNumber}`}
              className="px-5 py-2 rounded-full bg-black text-white text-sm hover:bg-black/80 transition"
            >
              {t("whatsappBtn")}
            </Link>
          </motion.div> */}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -3 }}
          >
            <Link
              href={SETTINGS.instagramUrl}
              className="px-5 py-2 rounded-full bg-black text-white text-sm hover:bg-black/80 transition"
            >
              {t("instagramBtn")}
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

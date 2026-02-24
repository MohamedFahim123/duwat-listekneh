"use client";

import { useTranslations } from "next-intl";
import Container from "../layout/Container/Container";
import Section from "../layout/Section/Section";
import Link from "next/link";
import { motion } from "framer-motion";

const BRANCHES = [
  { key: "khorfakkan" },
  { key: "dibbafujairah" },
  { key: "dibbahisn" },
];

export default function BranchesSection({ locale }: { locale: string }) {
  const t = useTranslations("branches");

  return (
    <Section className="bg-black py-20">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl font-semibold text-white mb-12"
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BRANCHES.map((branch) => (
            <motion.div
              key={branch.key}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="rounded-xl flex flex-col justify-between bg-[#111] border border-white/10 p-6 text-white transition"
            >
              <div>
                <h3 className="text-lg font-semibold">
                  {t(`items.${branch.key}.name`)}
                </h3>

                <p className="mt-3 text-sm text-white/60">
                  {t(`items.${branch.key}.phone`) ? (
                    <>
                      {locale === "ar" ? "رقم الهاتف:" : "Phone Number:"}{" "}
                      <Link
                        href={`tel:${t(`items.${branch.key}.phone`)}`}
                        className="underline"
                        target="_blank"
                      >
                        {t(`items.${branch.key}.phone`)}
                      </Link>
                    </>
                  ) : (
                    <span className="text-white/40">{locale === "ar" ? "لا يوجد رقم هاتف متاح" : "No phone number available"}</span>
                  )}
                </p>

                <p className="mt-3 text-sm text-white/60">
                  {t(`items.${branch.key}.phone`) ? (
                    <>
                      {locale === "ar" ? "واتساب:" : "WhatsApp:"}{" "}
                      <Link
                        href={`https://wa.me/${t(`items.${branch.key}.phone`)}`}
                        className="underline"
                        target="_blank"
                      >
                        {t(`items.${branch.key}.phone`)}
                      </Link>
                    </>
                  ) : (
                    <span className="text-white/40">{locale === "ar" ? "لا يوجد رقم واتساب متاح" : "No WhatsApp number available"}</span>
                  )}
                </p>

                <p className="mt-2 text-sm text-white/60">
                  {t(`items.${branch.key}.hours`)}
                </p>
              </div>

              <div>
                <Link
                  href={t(`items.${branch.key}.href`)}
                  target="_blank"
                  className="inline-block text-center mt-5 w-full rounded-md bg-white/10 py-2 text-xs font-medium hover:bg-white/20 transition"
                >
                  {t("openMap")}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

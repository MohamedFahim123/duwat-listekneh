import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <html>
      <body>
        <main className="min-h-screen flex items-center justify-center bg-white px-6 text-center">
          <section className="max-w-md">
            <h1 className="text-6xl font-bold mb-4">404</h1>

            <h2 className="text-2xl font-semibold mb-3">{t("title")}</h2>

            <p className="text-gray-500 mb-6">{t("description")}</p>

            <Link
              href="/"
              className="inline-block bg-black text-white px-6 py-3 rounded-full hover:opacity-80 transition"
            >
              {t("button")}
            </Link>
          </section>
        </main>
      </body>
    </html>
  );
}

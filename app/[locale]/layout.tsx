import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import Footer from "../components/Footer/Footer";
import { OrderModalProvider } from "../components/layout/OrderModalProvider/OrderModalProvider";
import Navbar from "../components/NavBar/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const locales = ["en", "ar"];

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const isArabic = locale === "ar";

  const title = isArabic
    ? "دوة الاستكانة | مقهى ومطعم إماراتي"
    : "Duwat Lstikneh | Emirati Café & Restaurant";

  const description = isArabic
    ? "قهوة ومذاق إماراتي دافئ — طازج، لذيذ، وبعناية. اطلب الآن عبر طلبات وكريم وكيتا."
    : "Emirati café comfort — fresh, warm, and made with care. Order now via Talabat.";

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://duwat-listekneh.vercel.app";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "Duwat Lstikneh",
      locale: isArabic ? "ar_AE" : "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={inter.variable}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <NextTopLoader color="#C59D5F" height={3} showSpinner={false} />

        <NextIntlClientProvider locale={locale} messages={messages}>
          <OrderModalProvider>
            <Navbar />

            <main className="pt-16 min-h-screen">{children}</main>
            <Footer />
          </OrderModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

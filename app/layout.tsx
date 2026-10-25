import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "EM-Web Development | Moderne Web Stranice & E-Commerce",
  description:
    "Izrada ultra-brzih web stranica, online prodavnica sa Stripe/PayPal integracijom i lokalnog SEO-a za biznise u Njemačkoj i regionu. DSGVO usklađeno.",
  keywords: [
    "Web Development",
    "E-Commerce",
    "Next.js",
    "Web dizajn Njemačka",
    "Izrada web stranica",
    "Stripe integracija",
    "DSGVO web stranice",
  ],
  authors: [{ name: "Edin Mujanović", url: "https://em-webdev.com" }],
  creator: "EM-Web Development",
  metadataBase: new URL("https://em-webdev.com"),
  openGraph: {
    title: "EM-Web Development | High-Performance Web & E-Commerce",
    description:
      "Pretvaram posjetioce u kupce: prilagođene web prodavnice, sistemi narudžbi i lokalni SEO.",
    url: "https://em-webdev.com",
    siteName: "EM-Web Development",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EM-Web Development",
    description: "Moderne web stranice i e-commerce rješenja.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
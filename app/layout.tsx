import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { localBusinessJsonLd, site } from "@/lib/site";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-brand",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AFH Metalmecánicos | Montajes industriales en Palmira",
    template: "%s | AFH Metalmecánicos",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Servicios industriales",
  keywords: [
    "metalmecánica Palmira",
    "montajes metalmecánicos Valle del Cauca",
    "mantenimiento industrial Cali",
    "estructuras metálicas Palmira",
    "soldadura industrial Yumbo",
    "AFH Metalmecánicos",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: site.url,
    siteName: site.name,
    title: "AFH Metalmecánicos | Montajes industriales en Palmira",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "AFH Metalmecánicos | Montajes industriales en Palmira",
    description: site.description,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" className={publicSans.variable}>
      <body className={`${publicSans.className} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

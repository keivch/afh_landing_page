import HomeClient from "@/components/home/HomeClient";
import { faqJsonLd, site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "AFH Metalmecánicos | Montajes industriales en Palmira",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AFH Metalmecánicos | Montajes industriales en Palmira",
    description: site.description,
    url: site.url,
    locale: "es_CO",
    type: "website",
    siteName: site.name,
  },
  other: {
    "facebook-domain-verification": "c2yk3qxicomcdpczlwenbmo9qci4nx",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <HomeClient />
    </>
  );
}

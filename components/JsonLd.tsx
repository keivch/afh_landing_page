// components/JsonLd.tsx
"use client";
import Script from "next/script";

export default function JsonLd({ data, id }: { data: Record<string, unknown>; id: string }) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

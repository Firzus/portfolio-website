"use client";

import Script from "next/script";

export default function Analytics() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <Script
      src="https://lprieu-analytics.up.railway.app/p12gy4mlfptmuc6w.js"
      data-ackee-server="https://lprieu-analytics.up.railway.app"
      data-ackee-domain-id="2fcd2124-0135-4012-8a06-61b9daf10f03"
      strategy="lazyOnload"
    />
  );
}

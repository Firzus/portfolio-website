import Script from "next/script";

export default function Analytics() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <Script
      defer
      data-domain="portfolio.lprieu.dev"
      src="https://analytics.lprieu.dev/js/script.js"
    />
  );
}

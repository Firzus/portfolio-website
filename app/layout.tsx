import "react-vertical-timeline-component/style.min.css";
import "@styles/globals.css";

import Analytics from "@/utils/analytics";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Prieu Lilian | Full-Stack & Game Developer Portfolio",
  description:
    "Dive into the works of Lilian, a French comp-sci student specializing in web and video game development. My portfolio highlights versatility in Unity, Unreal Engine, React, and Figma, with a track record of precision and leadership on diverse projects.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  );
}

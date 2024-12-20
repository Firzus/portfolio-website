import "react-vertical-timeline-component/style.min.css";
import "@styles/globals.css";

import Analytics from "@utils/analytics";

export const metadata = {
  title: "Prieu Lilian | Full-Stack & Game Developer Portfolio",
  description:
    "Dive into the works of Lilian, a French comp-sci student specializing in web and video game development. My portfolio highlights versatility in Unity, Unreal Engine, React, and Figma, with a track record of precision and leadership on diverse projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  );
}

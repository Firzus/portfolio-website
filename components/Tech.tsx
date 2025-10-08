"use client";

import type { StaticImageData } from "next/image";

import { SectionWrapper } from "@/hoc";
import { technologies } from "@/data/content";
import { BallCanvas } from "@/components/canvas";

interface Technology {
  name: string;
  icon: StaticImageData;
}

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {(technologies as Technology[]).map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon.src} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

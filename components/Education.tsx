"use client";

// Core
import Image from "next/image";
import type { StaticImageData } from "next/image";

// Lib
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

// Components
import { SectionWrapper } from "@/hoc";
import { academics } from "@/data/content";
import { textVariant } from "@/utils/motion";

interface Academic {
  title: string;
  school_name: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
}

const EducationCard = ({ academic }: { academic: Academic }) => {
  return (
    <VerticalTimelineElement
      visible
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={academic.date}
      iconStyle={{ background: academic.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            className="w-[60%] h-[60%] object-contain"
            src={academic.icon}
            alt={academic.school_name}
          />
        </div>
      }
    >
      <h3 className="text-white text-[24px] font-bold">{academic.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {academic.school_name}
      </p>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">Learning</p>
        <h2 className="sectionHeadText">Educational journey.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="">
          {academics.map((academic) => (
            <EducationCard
              key={`${academic.title}-${academic.school_name}`}
              academic={academic}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");

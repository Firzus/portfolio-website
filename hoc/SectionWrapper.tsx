"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

const SectionWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  idName: string
) =>
  function HOC(props: P) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="padding max-w-7xl mx-auto relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;

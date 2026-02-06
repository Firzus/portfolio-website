'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import type { Technology } from '@/types'

import { SectionWrapper } from '@/hoc'
import { technologies } from '@/data/content'
import { fadeIn, textVariant } from '@/utils/motion'

const TechIcon = ({ technology, index }: { technology: Technology; index: number }) => {
  return (
    <motion.div variants={fadeIn('up', 'tween', index * 0.08, 0.5)} className="group relative">
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-20 w-20 items-center justify-center border border-neutral-800/50 bg-surface transition-all duration-500 hover:border-accent/30 hover:bg-surface-raised sm:h-24 sm:w-24">
          {/* Corner marks */}
          <div className="pointer-events-none absolute top-0 left-0 h-2 w-2 border-t border-l border-transparent transition-colors duration-500 group-hover:border-accent/40" />
          <div className="pointer-events-none absolute top-0 right-0 h-2 w-2 border-t border-r border-transparent transition-colors duration-500 group-hover:border-accent/40" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-2 w-2 border-b border-l border-transparent transition-colors duration-500 group-hover:border-accent/40" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-2 w-2 border-r border-b border-transparent transition-colors duration-500 group-hover:border-accent/40" />

          <Image
            src={technology.icon}
            alt={technology.name}
            className="relative z-10 h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14"
          />
        </div>
        <span className="text-xs font-medium tracking-wider text-neutral-500 transition-colors duration-300 group-hover:text-accent">
          {technology.name}
        </span>
      </div>
    </motion.div>
  )
}

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-3">
        <p className="sectionSubText">Tools I work with</p>
        <h2 className="font-[family-name:var(--font-syne)] sectionHeadText">
          Technologies<span className="text-accent">.</span>
        </h2>
      </motion.div>

      <motion.div variants={fadeIn('none', 'tween', 0.1, 0.8)} className="mt-2">
        <div className="accent-rule-line mb-4 max-w-xs" />
      </motion.div>

      <div className="mt-12 flex flex-wrap justify-start gap-6 sm:gap-8">
        {technologies.map((technology, index) => (
          <TechIcon key={technology.name} technology={technology} index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '')

'use client'

// Core
import Image from 'next/image'

// Lib
import { motion } from 'framer-motion'

// Types
import type { Academic } from '@/types'

// Components
import { SectionWrapper } from '@/hoc'
import { academics } from '@/data/content'
import { textVariant, fadeIn } from '@/utils/motion'

const EducationCard = ({ academic, index }: { academic: Academic; index: number }) => {
  return (
    <motion.div variants={fadeIn('up', 'tween', 0.15 * index, 0.6)} className="group relative">
      <div className="flex flex-col gap-6 border-l border-neutral-800 py-6 pl-8 transition-all duration-500 hover:border-accent/50 sm:flex-row sm:items-start sm:gap-8">
        {/* Timeline dot */}
        <div className="absolute top-8 left-0 flex -translate-x-1/2 items-center justify-center">
          <div className="flex h-8 w-8 items-center justify-center bg-surface transition-colors duration-500 group-hover:bg-surface-raised">
            <div className="h-2 w-2 bg-neutral-600 transition-colors duration-500 group-hover:bg-accent" />
          </div>
        </div>

        {/* Icon */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-neutral-800/50 bg-surface">
          <Image
            className="h-8 w-8 object-contain"
            src={academic.icon}
            alt={academic.school_name}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium tracking-wider text-accent uppercase">
            {academic.date}
          </span>
          <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-neutral-100">
            {academic.title}
          </h3>
          <p className="text-sm text-neutral-500">{academic.school_name}</p>
        </div>
      </div>
    </motion.div>
  )
}

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-3">
        <p className="sectionSubText">Learning</p>
        <h2 className="font-[family-name:var(--font-syne)] sectionHeadText">
          Education<span className="text-accent">.</span>
        </h2>
      </motion.div>

      <motion.div variants={fadeIn('none', 'tween', 0.1, 0.8)} className="mt-2">
        <div className="accent-rule-line mb-4 max-w-xs" />
      </motion.div>

      <div className="mt-12 ml-4">
        {academics.map((academic, index) => (
          <EducationCard
            key={`${academic.title}-${academic.school_name}`}
            academic={academic}
            index={index}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Education, 'education')

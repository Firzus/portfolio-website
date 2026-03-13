'use client'

// Base
import Image from 'next/image'

// Lib
import { motion } from 'framer-motion'

// Types
import type { ExperiencePoint } from '@/types'

// Components
import { SectionWrapper } from '@/hoc'
import { experiences } from '@/data/content'
import { textVariant, fadeIn } from '@/utils/motion'

const ExperienceCard = ({ experience, index }: { experience: ExperiencePoint; index: number }) => {
  return (
    <motion.div variants={fadeIn('up', 'tween', 0.15 * index, 0.6)} className="group relative">
      <div className="flex flex-col gap-6 border-l border-neutral-800 py-8 pl-8 transition-all duration-500 hover:border-accent/50 sm:flex-row sm:gap-8">
        {/* Timeline dot */}
        <div className="absolute top-10 left-0 flex -translate-x-1/2 items-center justify-center">
          <div className="flex h-8 w-8 items-center justify-center bg-surface transition-colors duration-500 group-hover:bg-surface-raised">
            <div className="h-2 w-2 bg-neutral-600 transition-colors duration-500 group-hover:bg-accent" />
          </div>
        </div>

        {/* Icon */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-neutral-800/50 bg-surface">
          <Image
            className="h-9 w-9 object-contain"
            src={experience.icon}
            alt={experience.company_name}
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium tracking-wider text-accent uppercase">
              {experience.date}
            </span>
            <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-neutral-100">
              {experience.title}
            </h3>
            <p className="text-sm font-medium text-neutral-500">{experience.company_name}</p>
          </div>

          <ul className="mt-2 flex flex-col gap-2">
            {experience.points.map((point, i) => (
              <li
                key={`experience-point-${i}`}
                className="flex items-start gap-3 text-sm leading-relaxed text-neutral-400"
              >
                <span className="mt-2 h-1 w-1 shrink-0 bg-accent/60" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-3">
        <p className="sectionSubText">What I have done so far</p>
        <h2 className="font-[family-name:var(--font-syne)] sectionHeadText">
          Experience<span className="text-accent">.</span>
        </h2>
      </motion.div>

      <motion.div variants={fadeIn('none', 'tween', 0.1, 0.8)} className="mt-2">
        <div className="accent-rule-line mb-4 max-w-xs" />
      </motion.div>

      <div className="mt-12 ml-4">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.title}-${experience.company_name}-${experience.date}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')

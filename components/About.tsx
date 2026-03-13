'use client'

// Module
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'

// Content
import type { Service } from '@/types'

import { services } from '@/data/content'
import { SectionWrapper } from '@/hoc'

const ServiceCard = ({ index, title, icon }: Service & { index: number }) => {
  return (
    <motion.div variants={fadeIn('up', 'tween', 0.15 * index, 0.6)} className="group">
      <div className="relative flex h-full flex-col items-start gap-6 border border-neutral-800/50 bg-surface p-8 transition-all duration-500 hover:border-accent/30 hover:bg-surface-raised">
        {/* Corner accent */}
        <div className="absolute top-0 left-0 h-px w-8 bg-accent/50 transition-all duration-500 group-hover:w-16 group-hover:bg-accent" />
        <div className="absolute top-0 left-0 h-8 w-px bg-accent/50 transition-all duration-500 group-hover:h-16 group-hover:bg-accent" />

        <div className="flex h-14 w-14 items-center justify-center bg-neutral-900/80 text-neutral-400 transition-colors duration-500 group-hover:text-accent">
          <div className="h-8 w-8">{icon}</div>
        </div>

        <div>
          <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-neutral-100">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-3">
        <p className="sectionSubText">Introduction</p>
        <h2 className="font-[family-name:var(--font-syne)] sectionHeadText">
          Overview<span className="text-accent">.</span>
        </h2>
      </motion.div>

      <motion.div variants={fadeIn('none', 'tween', 0.1, 0.8)} className="mt-2">
        <div className="accent-rule-line mb-8 max-w-xs" />
      </motion.div>

      <motion.p
        variants={fadeIn('none', 'tween', 0.15, 0.8)}
        className="max-w-2xl text-base leading-relaxed text-neutral-400"
      >
        I am a French student with a specialization in video game and web development. My diverse
        projects have provided me with extensive experience across various domains, utilizing tools
        like Unity, Unreal Engine, and Figma. Known for my meticulous approach and strong leadership
        skills in team settings, I am eager to contribute my expertise to enhance your project.
      </motion.p>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')

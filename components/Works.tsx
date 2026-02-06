'use client'

// Core
import Image from 'next/image'

import { motion } from 'framer-motion'

// Types
import type { Project } from '@/types'

import { github } from '@/public/assets'
import { projects } from '@/data/content'
import { fadeIn, textVariant } from '@/utils/motion'
import { SectionWrapper } from '@/hoc'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: Project & { index: number }) => {
  return (
    <motion.div variants={fadeIn('up', 'tween', index * 0.1, 0.6)} className="group">
      <div className="relative flex h-full flex-col overflow-hidden border border-neutral-800/50 bg-surface transition-all duration-500 hover:border-accent/30">
        {/* Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={image}
            alt={name}
          />
          {/* Overlay gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />

          {/* Source link */}
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${name}`}
            className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center bg-primary/80 backdrop-blur-sm transition-all duration-300 hover:bg-accent"
          >
            <Image src={github} alt="" className="h-4 w-4 object-contain invert" />
          </a>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-neutral-100">
            {name}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-neutral-500">{description}</p>

          {/* Tags */}
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {tags.map((tag) => (
              <span key={tag.name} className={`text-xs font-medium tracking-wider ${tag.color}`}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-3">
        <p className="sectionSubText">My work</p>
        <h2 className="font-[family-name:var(--font-syne)] sectionHeadText">
          Projects<span className="text-accent">.</span>
        </h2>
      </motion.div>

      <motion.div variants={fadeIn('none', 'tween', 0.1, 0.8)} className="mt-2">
        <div className="accent-rule-line mb-4 max-w-xs" />
      </motion.div>

      <motion.p
        variants={fadeIn('none', 'tween', 0.15, 0.8)}
        className="mt-2 max-w-2xl text-base leading-relaxed text-neutral-400"
      >
        Real-world projects showcasing my skills across web development, game design, and creative
        tooling. Each project reflects my ability to solve complex problems and ship polished
        experiences.
      </motion.p>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')

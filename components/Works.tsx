'use client'

// Core
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { github } from '@/public/assets'
import { projects } from '@/data/content'
import { fadeIn, textVariant } from '@/utils/motion'
import { SectionWrapper } from '@/hoc'

interface ProjectTag {
  name: string
  color: string
}

interface ProjectCardProps {
  index: number
  name: string
  description: string
  tags: ProjectTag[]
  image: StaticImageData
  source_code_link: string
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.15, 0.6)}
      className="group w-full sm:w-[360px]"
    >
      <div className="relative w-full rounded-2xl border border-transparent bg-tertiary p-5 transition-all duration-300 hover:border-[#bd34fe]/50 hover:shadow-[0_0_30px_rgba(189,52,254,0.2)]">
        {/* Gradient overlay on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#bd34fe]/5 to-[#41d1ff]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-10">
          <div className="relative h-[230px] w-full overflow-hidden rounded-2xl">
            <Image
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              src={image}
              alt={name}
            />
            <div className="absolute inset-0 flex items-start justify-end p-3">
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/80 backdrop-blur-sm transition-colors hover:bg-[#bd34fe]"
              >
                <Image src={github} alt="github" className="h-1/2 w-1/2 object-contain" />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`rounded-full bg-primary/50 px-3 py-1 text-sm ${tag.color} font-medium`}
              >
                #{tag.name}
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
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">My work</p>
        <h2 className="sectionHeadText">Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('none', 'spring', 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          Following projects showcases my skills and experience through real-world examples of my
          work. Each project is briefly described with links to code repositories and live demos in
          it. It reflects my ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')

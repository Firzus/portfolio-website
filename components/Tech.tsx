'use client'

import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

import { SectionWrapper } from '@/hoc'
import { technologies } from '@/data/content'

interface Technology {
  name: string
  icon: StaticImageData
}

const TechIcon = ({ technology, index }: { technology: Technology; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-2xl border border-transparent bg-tertiary transition-all duration-300 hover:border-[#bd34fe]/50 hover:shadow-[0_0_25px_rgba(189,52,254,0.3)] sm:h-28 sm:w-28">
        {/* Gradient glow on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#bd34fe]/10 to-[#41d1ff]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <Image
          src={technology.icon}
          alt={technology.name}
          className="relative z-10 h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-sm font-medium text-secondary">{technology.name}</span>
      </div>
    </motion.div>
  )
}

const Tech = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="sectionHeadText">Technologies.</h2>
        <p className="mt-2 sectionSubText">Tools I work with</p>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-8 sm:gap-10">
        {(technologies as Technology[]).map((technology, index) => (
          <TechIcon key={technology.name} technology={technology} index={index} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, '')

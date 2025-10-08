'use client'

// Core
import Image from 'next/image'

// Module
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'

// Content
import type { StaticImageData } from 'next/image'

import { services } from '@/data/content'
import { SectionWrapper } from '@/hoc'

interface Service {
  title: string
  icon: StaticImageData
}

const ServiceCard = ({ index, title, icon }: Service & { index: number }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.3 * index, 0.6)}
      className="group w-full xs:w-[250px]"
    >
      <div className="relative flex min-h-[280px] w-full flex-col items-center justify-center rounded-2xl border border-transparent bg-tertiary p-8 transition-all duration-300 hover:border-[#bd34fe]/50 hover:shadow-[0_0_30px_rgba(189,52,254,0.2)]">
        {/* Gradient glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#bd34fe]/5 to-[#41d1ff]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="rounded-xl bg-primary/50 p-4 transition-colors group-hover:bg-primary">
            <Image
              src={icon}
              alt={title}
              className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 className="text-center text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
    </motion.div>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText text-secondary">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('none', 'spring', 0.1, 1)}
        className="mt-6 max-w-3xl text-lg leading-relaxed text-secondary"
      >
        I am a French student with a specialization in video game and web development. My diverse
        projects have provided me with extensive experience across various domains, utilizing tools
        like Unity, Unreal Engine, and Figma. Known for my meticulous approach and strong leadership
        skills in team settings, I am eager to contribute my expertise to enhance your project.
      </motion.p>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')

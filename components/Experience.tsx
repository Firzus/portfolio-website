'use client'

// Base
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

// Lib
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

// Components
import { SectionWrapper } from '@/hoc'
import { experiences } from '@/data/content'
import { textVariant } from '@/utils/motion'

interface ExperiencePoint {
  title: string
  company_name: string
  icon: StaticImageData
  iconBg: string
  date: string
  points: string[]
}

const ExperienceCard = ({ experience }: { experience: ExperiencePoint }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: '#1a1a1a',
        color: '#fff',
        border: '1px solid rgba(189, 52, 254, 0.2)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
      }}
      contentArrowStyle={{ borderRight: '7px solid #1a1a1a' }}
      date={experience.date}
      dateClassName="text-secondary"
      iconStyle={{
        background: experience.iconBg,
        border: '2px solid #bd34fe',
        boxShadow: '0 0 20px rgba(189, 52, 254, 0.3)',
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image
            className="h-[60%] w-[60%] object-contain"
            src={experience.icon}
            alt={experience.company_name}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p className="text-[16px] font-semibold text-secondary" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 ml-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">What I have done so far</p>
        <h2 className="sectionHeadText">Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#bd34fe">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.title}-${experience.company_name}-${experience.date}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')

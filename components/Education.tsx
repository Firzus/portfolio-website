'use client'

// Core
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

// Lib
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

// Components
import { SectionWrapper } from '@/hoc'
import { academics } from '@/data/content'
import { textVariant } from '@/utils/motion'

interface Academic {
  title: string
  school_name: string
  icon: StaticImageData
  iconBg: string
  date: string
}

const EducationCard = ({ academic }: { academic: Academic }) => {
  return (
    <VerticalTimelineElement
      visible
      contentStyle={{
        background: '#1a1a1a',
        color: '#fff',
        border: '1px solid rgba(189, 52, 254, 0.2)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
      }}
      contentArrowStyle={{ borderRight: '7px solid #1a1a1a' }}
      date={academic.date}
      dateClassName="text-secondary"
      iconStyle={{
        background: academic.iconBg,
        border: '2px solid #bd34fe',
        boxShadow: '0 0 20px rgba(189, 52, 254, 0.3)',
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image
            className="h-[60%] w-[60%] object-contain"
            src={academic.icon}
            alt={academic.school_name}
          />
        </div>
      }
    >
      <h3 className="text-[24px] font-bold text-white">{academic.title}</h3>
      <p className="text-[16px] font-semibold text-secondary" style={{ margin: 0 }}>
        {academic.school_name}
      </p>
    </VerticalTimelineElement>
  )
}

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">Learning</p>
        <h2 className="sectionHeadText">Educational journey.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#bd34fe">
          {academics.map((academic) => (
            <EducationCard key={`${academic.title}-${academic.school_name}`} academic={academic} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Education, 'education')

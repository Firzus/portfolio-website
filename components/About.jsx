'use client'

import Image from 'next/image'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@utils/motion'

// Content
import { services } from '@data/content'
import { SectionWrapper } from '@hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <Image
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className='sectionSubText'>Introduction</p>
        <h2 className='sectionHeadText'>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique suscipit provident reiciendis laborum exercitationem error, quo excepturi, aliquam sint necessitatibus quidem quos, animi iure est quae. Ea, magnam? Est laudantium error vitae quidem architecto vero nemo porro autem quas. Aliquid sapiente, quas porro cumque neque aperiam corrupti ducimus consequatur.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
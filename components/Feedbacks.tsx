'use client'

// Core
import Image from 'next/image'

import { motion } from 'framer-motion'

// Types
import type { Testimonial } from '@/types'

import { SectionWrapper } from '@/hoc'
import { fadeIn, textVariant } from '@/utils/motion'
import { testimonials } from '@/data/content'

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: Testimonial & { index: number }) => (
  <motion.div
    variants={fadeIn('up', 'tween', index * 0.15, 0.6)}
    className="group w-full border border-neutral-800/50 bg-surface p-8 transition-all duration-500 hover:border-accent/30 xs:w-[340px]"
  >
    <p className="font-[family-name:var(--font-syne)] text-3xl font-bold text-accent">&ldquo;</p>

    <div className="mt-2">
      <p className="text-sm leading-relaxed text-neutral-300">{testimonial}</p>

      <div className="mt-6 flex items-center gap-3 border-t border-neutral-800/50 pt-4">
        <div className="flex flex-1 flex-col">
          <p className="text-sm font-medium text-neutral-100">
            <span className="text-accent">@</span> {name}
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">
            {designation} of {company}
          </p>
        </div>

        {image && (
          <Image
            src={image}
            alt={`feedback-by-${name}`}
            className="h-9 w-9 object-cover"
            width={36}
            height={36}
          />
        )}
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-3">
        <p className="sectionSubText">What others say</p>
        <h2 className="font-[family-name:var(--font-syne)] sectionHeadText">
          Testimonials<span className="text-accent">.</span>
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-6">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Feedbacks, '')

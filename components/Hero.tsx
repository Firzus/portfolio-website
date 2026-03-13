'use client'

// Core
import Link from 'next/link'
import { motion } from 'framer-motion'

const LINE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen w-full flex-col justify-end overflow-hidden bg-primary pb-16 sm:pb-20 lg:justify-center lg:pb-0">
      {/* Ambient glow — warm copper, positioned asymmetrically */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-[30%] right-[5%] h-[60%] w-[50%] rounded-full opacity-[0.07] blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #e8a849 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.07, 0.1, 0.07],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-[20%] -left-[15%] h-[50%] w-[50%] rounded-full opacity-[0.05] blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #7b8ea0 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Decorative grid lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-full w-px bg-neutral-800/30" />
        <div className="absolute top-0 left-1/2 h-full w-px bg-neutral-800/30" />
        <div className="absolute top-0 left-3/4 h-full w-px bg-neutral-800/30" />
      </div>

      {/* Main content */}
      <div className="paddingX relative z-10 mx-auto w-full max-w-[1400px] pt-32 lg:pt-0">
        <div className="flex flex-col gap-8 lg:gap-10">
          {/* Overline label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: LINE_EASE }}
            className="flex items-center gap-3"
          >
            <div className="accent-dot" />
            <span className="font-[family-name:var(--font-syne)] text-xs font-medium tracking-[0.25em] text-accent uppercase">
              Full-Stack & Game Developer
            </span>
          </motion.div>

          {/* Heading — oversized, editorial */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: LINE_EASE, delay: 0.15 }}
              className="font-[family-name:var(--font-syne)] heroHeadText"
            >
              Lilian
            </motion.h1>
          </div>
          <div className="-mt-6 overflow-hidden lg:-mt-8">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: LINE_EASE, delay: 0.25 }}
              className="font-[family-name:var(--font-syne)] heroHeadText"
            >
              <span className="accent-text-gradient">Prieu</span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: LINE_EASE, delay: 0.5 }}
            className="max-w-xl heroSubText"
          >
            I build video games, modern web experiences, and craft thoughtful interface design
            &#8212; blending code with creative vision.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: LINE_EASE, delay: 0.6 }}
            className="accent-rule-line max-w-md"
          />

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: LINE_EASE, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="#work">
              <motion.button
                className="rounded-none bg-accent px-7 py-3.5 font-[family-name:var(--font-syne)] text-sm font-semibold tracking-wide text-primary uppercase transition-colors hover:bg-accent-hover"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.button>
            </Link>
            <Link href="#contact">
              <motion.button
                className="rounded-none border border-accent/40 px-7 py-3.5 font-[family-name:var(--font-syne)] text-sm font-semibold tracking-wide text-neutral-200 uppercase transition-colors hover:border-accent hover:text-accent"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <Link href="#about" className="group flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium tracking-[0.3em] text-neutral-500 uppercase transition-colors group-hover:text-accent">
            Scroll
          </span>
          <motion.div
            className="h-8 w-px bg-neutral-600"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </Link>
      </motion.div>
    </section>
  )
}

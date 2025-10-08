'use client'

// Core
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative mx-auto h-screen w-full overflow-hidden bg-primary">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-[40%] -right-[20%] h-[80%] w-[80%] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #bd34fe 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-[40%] -left-[20%] h-[80%] w-[80%] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #41d1ff 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Main content */}
      <div className="paddingX relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heroHeadText mb-6 text-white">
            Hi, I&apos;m <span className="violet-text-gradient">Lilian</span>
          </h1>
          <p className="max-w-3xl heroSubText">
            I develop video games, websites, and I also do interface design.
            <br />
            Building modern experiences with cutting-edge technologies.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#work">
              <motion.button
                className="violet-gradient rounded-lg px-8 py-3 font-medium text-white transition-opacity hover:opacity-90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </Link>
            <Link href="#contact">
              <motion.button
                className="rounded-lg border border-[#bd34fe] px-8 py-3 font-medium text-white transition-colors hover:bg-[#bd34fe]/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex w-full items-center justify-center">
        <Link href="#about">
          <motion.div
            className="flex h-[52px] w-[32px] cursor-pointer items-start justify-center rounded-full border-2 border-secondary/50 p-2 transition-colors hover:border-secondary"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="mb-1 h-2 w-2 rounded-full bg-secondary"
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          </motion.div>
        </Link>
      </div>
    </section>
  )
}

'use client'

// Core
import Link from 'next/link'
import Image from 'next/image'

// React
import { useState, useEffect } from 'react'

// Lib
import { motion, AnimatePresence } from 'framer-motion'

// Data
import { logo, menu, close } from '@/public/assets'
import { navLinks } from '@/data/content'

export default function Navbar() {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`paddingX fixed top-0 z-20 flex w-full items-center py-4 transition-all duration-500 ${
        scrolled
          ? 'border-b border-neutral-800/50 bg-primary/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <Image
            src={logo}
            alt="logo"
            className="h-8 w-8 object-contain transition-opacity group-hover:opacity-80"
          />
          <span className="font-[family-name:var(--font-syne)] text-base font-bold tracking-tight text-neutral-50">
            LP<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                onClick={() => setActive(link.title)}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  active === link.title ? 'text-accent' : 'text-neutral-400 hover:text-neutral-100'
                }`}
              >
                {link.title}
                {active === link.title && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-px w-full bg-accent"
                    transition={{ type: 'tween', duration: 0.3 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <div className="flex items-center sm:hidden">
          <button
            className="flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-70"
            onClick={() => setToggle((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <Image className="h-5 w-5 object-contain" src={toggle ? close : menu} alt="menu" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full right-0 left-0 z-50 border-b border-neutral-800/50 bg-primary/95 backdrop-blur-lg"
          >
            <ul className="flex flex-col px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`#${link.id}`}
                    onClick={() => {
                      setToggle(false)
                      setActive(link.title)
                    }}
                    className={`block border-b border-neutral-800/30 py-3.5 text-sm font-medium tracking-wide transition-colors ${
                      active === link.title ? 'text-accent' : 'text-neutral-400'
                    }`}
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

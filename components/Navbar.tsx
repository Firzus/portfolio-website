'use client'

// Core
import Link from 'next/link'
import Image from 'next/image'

// React
import { useState } from 'react'

// Data
import { logo, menu, close } from '@/public/assets'
import { navLinks } from '@/data/content'

export default function Navbar() {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="paddingX fixed top-0 z-20 flex w-full items-center border-b border-white/5 bg-primary/80 py-5 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <div className="relative">
            <Image
              src={logo}
              alt="logo"
              className="h-9 w-9 object-contain transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full bg-[#bd34fe]/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
          </div>

          <p className="flex cursor-pointer items-center text-lg font-semibold text-white">
            Lilian&nbsp;
            <span className="violet-text-gradient hidden sm:block">Prieu</span>
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-8 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="relative"
              onClick={() => {
                setActive(link.title)
              }}
            >
              <Link
                href={`#${link.id}`}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } group relative cursor-pointer text-base font-medium transition-colors hover:text-white`}
              >
                {link.title}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#bd34fe] to-[#41d1ff] transition-all duration-300 ${
                    active === link.title ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/5"
            onClick={() => {
              setToggle(!toggle)
            }}
            aria-label="Toggle menu"
          >
            <Image className="h-6 w-6 object-contain" src={toggle ? close : menu} alt="menu" />
          </button>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } absolute top-20 right-0 z-10 mx-4 my-2 min-w-[160px] rounded-2xl border border-[#bd34fe]/20 bg-tertiary p-6 shadow-[0_0_30px_rgba(189,52,254,0.2)] backdrop-blur-md`}
          >
            <ul className="flex w-full list-none flex-col items-start justify-end gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="w-full"
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <Link
                    href={`#${link.id}`}
                    className={`${
                      active === link.title ? 'bg-[#bd34fe]/10 text-white' : 'text-secondary'
                    } block rounded-lg px-4 py-2 text-base font-medium transition-all hover:bg-[#bd34fe]/10 hover:text-white`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

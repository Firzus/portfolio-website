import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

// Mock all public/assets exports (vi.mock is hoisted, cannot reference outer variables)
vi.mock('@/public/assets', () => {
  const img = { src: '/mock.png', height: 1, width: 1 }
  return {
    github: img,
    menu: img,
    close: img,
    blank: img,
    cpp: img,
    csharp: img,
    unity: img,
    unreal_engine: img,
    reactjs: img,
    tailwind: img,
    gtech: img,
    bia: img,
    huzounet: img,
    doxio: img,
    freelance: img,
    huzounet_demo: img,
    wakfu_guide: img,
    ia: img,
    engine: img,
    portfolio: img,
    plush_memory: img,
    reminiscence: img,
    nuit_detente: img,
  }
})

// Mock next/image
vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    const { src, ...rest } = props
    const imgSrc = typeof src === 'object' && src !== null ? (src as { src: string }).src : src
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img src={imgSrc as string} {...rest} />
  },
}))

// Mock next/link
vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...rest
  }: {
    children: React.ReactNode
    href: string
    [key: string]: unknown
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}))

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    span: ({ children, ...rest }: { children?: React.ReactNode; [key: string]: unknown }) => (
      <span {...rest}>{children}</span>
    ),
    div: ({ children, ...rest }: { children?: React.ReactNode; [key: string]: unknown }) => (
      <div {...rest}>{children}</div>
    ),
    li: ({ children, ...rest }: { children?: React.ReactNode; [key: string]: unknown }) => (
      <li {...rest}>{children}</li>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the logo text', () => {
    render(<Navbar />)

    expect(screen.getByText(/LP/)).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)

    expect(screen.getAllByText('About').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Education').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Work').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the mobile toggle button', () => {
    render(<Navbar />)

    const toggleButton = screen.getByRole('button', { name: /toggle menu/i })
    expect(toggleButton).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', () => {
    render(<Navbar />)

    const toggleButton = screen.getByRole('button', { name: /toggle menu/i })

    fireEvent.click(toggleButton)

    // Mobile menu links should be rendered (duplicates of desktop links)
    const aboutLinks = screen.getAllByText('About')
    expect(aboutLinks.length).toBeGreaterThanOrEqual(2) // desktop + mobile
  })

  it('renders navigation links with correct href', () => {
    render(<Navbar />)

    const aboutLinks = screen.getAllByText('About')
    const aboutLink = aboutLinks.find((el) => el.closest('a')?.getAttribute('href') === '#about')

    expect(aboutLink).toBeDefined()
  })

  it('has a home link that points to /', () => {
    render(<Navbar />)

    const logoLink = screen.getByText(/LP/).closest('a')
    expect(logoLink).toHaveAttribute('href', '/')
  })
})

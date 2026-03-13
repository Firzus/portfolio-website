import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import SectionWrapper from './SectionWrapper'

describe('SectionWrapper', () => {
  it('renders the wrapped component', () => {
    const TestComponent = () => <div data-testid="test-child">Hello</div>
    const Wrapped = SectionWrapper(TestComponent, 'test-section')

    render(<Wrapped />)

    expect(screen.getByTestId('test-child')).toBeInTheDocument()
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('renders an anchor span with the given idName', () => {
    const TestComponent = () => <p>Content</p>
    const Wrapped = SectionWrapper(TestComponent, 'my-section')

    render(<Wrapped />)

    const anchor = document.getElementById('my-section')
    expect(anchor).toBeInTheDocument()
    expect(anchor?.tagName).toBe('SPAN')
  })

  it('renders the section with correct class names', () => {
    const TestComponent = () => <p>Content</p>
    const Wrapped = SectionWrapper(TestComponent, 'styled')

    const { container } = render(<Wrapped />)

    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section?.className).toContain('relative')
    expect(section?.className).toContain('z-0')
    expect(section?.className).toContain('mx-auto')
  })

  it('passes props through to the wrapped component', () => {
    const TestComponent = ({ label }: { label: string }) => <span>{label}</span>
    const Wrapped = SectionWrapper(TestComponent, 'props-test')

    render(<Wrapped label="forwarded" />)

    expect(screen.getByText('forwarded')).toBeInTheDocument()
  })

  it('renders with empty idName', () => {
    const TestComponent = () => <p>Empty id</p>
    const Wrapped = SectionWrapper(TestComponent, '')

    const { container } = render(<Wrapped />)

    expect(screen.getByText('Empty id')).toBeInTheDocument()

    // The span still renders with id="" even though getElementById('') returns null
    const anchor = container.querySelector('span.hash-span')
    expect(anchor).toBeInTheDocument()
    expect(anchor?.getAttribute('id')).toBe('')
  })
})

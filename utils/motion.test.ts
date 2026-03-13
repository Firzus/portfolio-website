import { describe, it, expect } from 'vitest'

import { textVariant, fadeIn, zoomIn, slideIn, staggerContainer, lineReveal } from './motion'

describe('textVariant', () => {
  it('returns hidden and show variants with default delay', () => {
    const variants = textVariant()

    expect(variants.hidden).toEqual({ y: 30, opacity: 0 })
    expect(variants.show).toEqual({
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        ease: [0.22, 1, 0.36, 1],
        duration: 0.8,
        delay: 0,
      },
    })
  })

  it('applies custom delay', () => {
    const variants = textVariant(0.5)
    const show = variants.show as Record<string, unknown>
    const transition = show.transition as Record<string, unknown>

    expect(transition.delay).toBe(0.5)
  })
})

describe('fadeIn', () => {
  it('returns correct hidden state for "left" direction', () => {
    const variants = fadeIn('left')
    const hidden = variants.hidden as Record<string, unknown>

    expect(hidden.x).toBe(60)
    expect(hidden.y).toBe(0)
    expect(hidden.opacity).toBe(0)
  })

  it('returns correct hidden state for "right" direction', () => {
    const variants = fadeIn('right')
    const hidden = variants.hidden as Record<string, unknown>

    expect(hidden.x).toBe(-60)
    expect(hidden.y).toBe(0)
  })

  it('returns correct hidden state for "up" direction', () => {
    const variants = fadeIn('up')
    const hidden = variants.hidden as Record<string, unknown>

    expect(hidden.x).toBe(0)
    expect(hidden.y).toBe(40)
  })

  it('returns correct hidden state for "down" direction', () => {
    const variants = fadeIn('down')
    const hidden = variants.hidden as Record<string, unknown>

    expect(hidden.x).toBe(0)
    expect(hidden.y).toBe(-40)
  })

  it('returns correct hidden state for "none" direction', () => {
    const variants = fadeIn('none')
    const hidden = variants.hidden as Record<string, unknown>

    expect(hidden.x).toBe(0)
    expect(hidden.y).toBe(0)
    expect(hidden.opacity).toBe(0)
  })

  it('defaults to "none" direction', () => {
    const variants = fadeIn()
    const hidden = variants.hidden as Record<string, unknown>

    expect(hidden.x).toBe(0)
    expect(hidden.y).toBe(0)
  })

  it('show state resets position and opacity', () => {
    const variants = fadeIn('left', 'tween', 0.2, 1)
    const show = variants.show as Record<string, unknown>

    expect(show.x).toBe(0)
    expect(show.y).toBe(0)
    expect(show.opacity).toBe(1)
  })

  it('applies custom delay and duration in transition', () => {
    const variants = fadeIn('up', 'spring', 0.3, 1.5)
    const show = variants.show as Record<string, unknown>
    const transition = show.transition as Record<string, unknown>

    expect(transition.delay).toBe(0.3)
    expect(transition.duration).toBe(1.5)
    expect(transition.type).toBe('spring')
  })
})

describe('zoomIn', () => {
  it('returns hidden state with scale 0.9 and opacity 0', () => {
    const variants = zoomIn()

    expect(variants.hidden).toEqual({ scale: 0.9, opacity: 0 })
  })

  it('returns show state with scale 1 and opacity 1', () => {
    const variants = zoomIn()
    const show = variants.show as Record<string, unknown>

    expect(show.scale).toBe(1)
    expect(show.opacity).toBe(1)
  })

  it('applies custom delay and duration', () => {
    const variants = zoomIn(0.4, 1.2)
    const show = variants.show as Record<string, unknown>
    const transition = show.transition as Record<string, unknown>

    expect(transition.delay).toBe(0.4)
    expect(transition.duration).toBe(1.2)
  })

  it('uses tween type and default ease', () => {
    const variants = zoomIn()
    const show = variants.show as Record<string, unknown>
    const transition = show.transition as Record<string, unknown>

    expect(transition.type).toBe('tween')
    expect(transition.ease).toEqual([0.22, 1, 0.36, 1])
  })
})

describe('slideIn', () => {
  it('slides from left with -100% x offset', () => {
    const variants = slideIn('left')
    const hidden = variants.hidden as Record<string, unknown>

    expect(hidden.x).toBe('-100%')
    expect(hidden.y).toBe(0)
  })

  it('slides from right with 100% x offset', () => {
    const variants = slideIn('right')
    const hidden = variants.hidden as Record<string, unknown>

    expect(hidden.x).toBe('100%')
    expect(hidden.y).toBe(0)
  })

  it('slides from up with 100% y offset', () => {
    const variants = slideIn('up')
    const hidden = variants.hidden as Record<string, unknown>

    expect(hidden.x).toBe(0)
    expect(hidden.y).toBe('100%')
  })

  it('slides from down with 100% y offset', () => {
    const variants = slideIn('down')
    const hidden = variants.hidden as Record<string, unknown>

    expect(hidden.x).toBe(0)
    expect(hidden.y).toBe('100%')
  })

  it('show state resets to zero position', () => {
    const variants = slideIn('left')
    const show = variants.show as Record<string, unknown>

    expect(show.x).toBe(0)
    expect(show.y).toBe(0)
  })

  it('applies custom type, delay and duration', () => {
    const variants = slideIn('right', 'spring', 0.5, 2)
    const show = variants.show as Record<string, unknown>
    const transition = show.transition as Record<string, unknown>

    expect(transition.type).toBe('spring')
    expect(transition.delay).toBe(0.5)
    expect(transition.duration).toBe(2)
  })

  it('defaults to "left" direction', () => {
    const variants = slideIn()
    const hidden = variants.hidden as Record<string, unknown>

    expect(hidden.x).toBe('-100%')
  })
})

describe('staggerContainer', () => {
  it('returns empty hidden state', () => {
    const variants = staggerContainer()

    expect(variants.hidden).toEqual({})
  })

  it('returns show state with default stagger and delay children', () => {
    const variants = staggerContainer()
    const show = variants.show as Record<string, unknown>
    const transition = show.transition as Record<string, unknown>

    expect(transition.staggerChildren).toBe(0.12)
    expect(transition.delayChildren).toBe(0)
  })

  it('applies custom stagger and delay children', () => {
    const variants = staggerContainer(0.2, 0.5)
    const show = variants.show as Record<string, unknown>
    const transition = show.transition as Record<string, unknown>

    expect(transition.staggerChildren).toBe(0.2)
    expect(transition.delayChildren).toBe(0.5)
  })
})

describe('lineReveal', () => {
  it('returns hidden state with scaleX 0 and originX 0', () => {
    const variants = lineReveal()

    expect(variants.hidden).toEqual({ scaleX: 0, originX: 0 })
  })

  it('returns show state with scaleX 1 and tween transition', () => {
    const variants = lineReveal()
    const show = variants.show as Record<string, unknown>

    expect(show.scaleX).toBe(1)

    const transition = show.transition as Record<string, unknown>
    expect(transition.type).toBe('tween')
    expect(transition.ease).toEqual([0.22, 1, 0.36, 1])
    expect(transition.duration).toBe(1)
    expect(transition.delay).toBe(0)
  })

  it('applies custom delay', () => {
    const variants = lineReveal(0.7)
    const show = variants.show as Record<string, unknown>
    const transition = show.transition as Record<string, unknown>

    expect(transition.delay).toBe(0.7)
  })
})

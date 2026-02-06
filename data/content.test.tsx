import { describe, it, expect } from 'vitest'

import {
  navLinks,
  services,
  technologies,
  academics,
  experiences,
  testimonials,
  projects,
} from './content'

describe('navLinks', () => {
  it('is a non-empty array', () => {
    expect(navLinks.length).toBeGreaterThan(0)
  })

  it('each link has a non-empty id and title', () => {
    for (const link of navLinks) {
      expect(link.id).toBeTruthy()
      expect(link.title).toBeTruthy()
      expect(typeof link.id).toBe('string')
      expect(typeof link.title).toBe('string')
    }
  })

  it('contains required navigation sections', () => {
    const ids = navLinks.map((l) => l.id)

    expect(ids).toContain('about')
    expect(ids).toContain('contact')
  })

  it('has no duplicate ids', () => {
    const ids = navLinks.map((l) => l.id)
    const uniqueIds = new Set(ids)

    expect(uniqueIds.size).toBe(ids.length)
  })
})

describe('services', () => {
  it('is a non-empty array', () => {
    expect(services.length).toBeGreaterThan(0)
  })

  it('each service has a title and icon', () => {
    for (const service of services) {
      expect(service.title).toBeTruthy()
      expect(service.icon).toBeDefined()
    }
  })

  it('has no duplicate titles', () => {
    const titles = services.map((s) => s.title)
    const uniqueTitles = new Set(titles)

    expect(uniqueTitles.size).toBe(titles.length)
  })
})

describe('technologies', () => {
  it('is a non-empty array', () => {
    expect(technologies.length).toBeGreaterThan(0)
  })

  it('each technology has a name and icon', () => {
    for (const tech of technologies) {
      expect(tech.name).toBeTruthy()
      expect(tech.icon).toBeDefined()
    }
  })

  it('has no duplicate names', () => {
    const names = technologies.map((t) => t.name)
    const uniqueNames = new Set(names)

    expect(uniqueNames.size).toBe(names.length)
  })
})

describe('academics', () => {
  it('is a non-empty array', () => {
    expect(academics.length).toBeGreaterThan(0)
  })

  it('each academic entry has required fields', () => {
    for (const academic of academics) {
      expect(academic.title).toBeTruthy()
      expect(academic.school_name).toBeTruthy()
      expect(academic.icon).toBeDefined()
      expect(academic.iconBg).toBeTruthy()
      expect(academic.date).toBeTruthy()
    }
  })

  it('iconBg is a valid hex color', () => {
    for (const academic of academics) {
      expect(academic.iconBg).toMatch(/^#[0-9a-fA-F]{6}$/)
    }
  })
})

describe('experiences', () => {
  it('is a non-empty array', () => {
    expect(experiences.length).toBeGreaterThan(0)
  })

  it('each experience has required fields', () => {
    for (const exp of experiences) {
      expect(exp.title).toBeTruthy()
      expect(exp.company_name).toBeTruthy()
      expect(exp.icon).toBeDefined()
      expect(exp.iconBg).toBeTruthy()
      expect(exp.date).toBeTruthy()
      expect(exp.points).toBeDefined()
      expect(Array.isArray(exp.points)).toBe(true)
    }
  })

  it('each experience has at least one point', () => {
    for (const exp of experiences) {
      expect(exp.points.length).toBeGreaterThan(0)
    }
  })

  it('all points are non-empty strings', () => {
    for (const exp of experiences) {
      for (const point of exp.points) {
        expect(typeof point).toBe('string')
        expect(point.trim().length).toBeGreaterThan(0)
      }
    }
  })
})

describe('testimonials', () => {
  it('is an array', () => {
    expect(Array.isArray(testimonials)).toBe(true)
  })

  it('each testimonial has required fields', () => {
    for (const testimonial of testimonials) {
      expect(testimonial.testimonial).toBeTruthy()
      expect(testimonial.name).toBeTruthy()
      expect(testimonial.designation).toBeTruthy()
      expect(testimonial.company).toBeTruthy()
    }
  })
})

describe('projects', () => {
  it('is a non-empty array', () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  it('each project has required fields', () => {
    for (const project of projects) {
      expect(project.name).toBeTruthy()
      expect(project.description).toBeTruthy()
      expect(project.image).toBeDefined()
      expect(project.source_code_link).toBeTruthy()
      expect(Array.isArray(project.tags)).toBe(true)
    }
  })

  it('each project has at least one tag', () => {
    for (const project of projects) {
      expect(project.tags.length).toBeGreaterThan(0)
    }
  })

  it('each tag has a name and color', () => {
    for (const project of projects) {
      for (const tag of project.tags) {
        expect(tag.name).toBeTruthy()
        expect(tag.color).toBeTruthy()
      }
    }
  })

  it('has no duplicate project names', () => {
    const names = projects.map((p) => p.name)
    const uniqueNames = new Set(names)

    expect(uniqueNames.size).toBe(names.length)
  })

  it('source_code_link is a valid URL', () => {
    for (const project of projects) {
      expect(() => new URL(project.source_code_link)).not.toThrow()
    }
  })
})

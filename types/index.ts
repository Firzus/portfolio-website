import type { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

export interface NavLink {
  id: string
  title: string
}

export interface Service {
  title: string
  icon: ReactNode
}

export interface Technology {
  name: string
  icon: StaticImageData
}

export interface Academic {
  title: string
  school_name: string
  icon: StaticImageData
  iconBg: string
  date: string
}

export interface ExperiencePoint {
  title: string
  company_name: string
  icon: StaticImageData
  iconBg: string
  date: string
  points: string[]
}

export interface Testimonial {
  testimonial: string
  name: string
  designation: string
  company: string
  image: string | null
}

export interface ProjectTag {
  name: string
  color: string
}

export interface Project {
  name: string
  description: string
  tags: ProjectTag[]
  image: StaticImageData
  source_code_link: string
}

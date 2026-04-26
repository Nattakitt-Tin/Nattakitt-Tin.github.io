export interface ExperienceItem {
  role: string
  team: string
  company: string
  period: string
  bullets: string[]
}

export interface ProjectItem {
  tag: string
  name: string
  company: string
  period: string
  desc: string
  techs: string[]
  link: string | null
  _placeholder?: never
}

export interface PlaceholderProject {
  _placeholder: true
}

export interface SkillCategory {
  cat: string
  tags: string[]
}

export interface ToolItem {
  icon: string
  name: string
  desc: string
}

export interface ResumeData {
  name: string
  role: string
  summary: string
  contact: {
    phone: string
    email: string
    github: string
    linkedin: string
  }
  experience: ExperienceItem[]
  projects: (ProjectItem | PlaceholderProject)[]
  skills: SkillCategory[]
  tools: ToolItem[]
  education: {
    degree: string
    school: string
    period: string
  }
  publication: {
    journal: string
    title: string
    url: string
  }
}

export interface SectionConfig {
  id: string
  label: string
  type: string
}

export interface AccentOption {
  c: string
}

export interface Tweaks {
  accent: string
  density: 'compact' | 'comfortable' | 'spacious'
}

export type Theme = 'dark' | 'light'

declare global {
  interface Window {
    claude?: {
      complete: (opts: { messages: { role: string; content: string }[]; system: string }) => Promise<string>
    }
  }
}

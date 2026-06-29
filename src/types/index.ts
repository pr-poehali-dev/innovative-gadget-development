import type { ReactNode } from "react"

export interface Tariff {
  position: string
  price: string
  unit: string
  icon: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  tariffs?: Tariff[]
  showLogo?: boolean
  showMap?: boolean
  showWorker?: boolean
  bgImage?: string
  contacts?: { icon: string; label: string; value: string; href: string }[]
}

export interface SectionProps extends Section {
  isActive: boolean
}
import { LucideIconData } from 'lucide-angular'

declare global {
  export interface Tag {
    id: string
    title: string
    icon: LucideIconData
  }
}

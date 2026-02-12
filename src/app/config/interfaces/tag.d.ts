import { LucideIconData } from 'lucide-angular'

declare global {
  export interface TagItem {
    id: string
    title: string
    icon: LucideIconData
  }
}

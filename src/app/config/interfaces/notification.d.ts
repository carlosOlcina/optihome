import { NotificationEnum } from '../enums/notification-enum'

declare global {
  export interface NotificationType {
    id: string
    content: string
    type: NotificationEnum
  }
}

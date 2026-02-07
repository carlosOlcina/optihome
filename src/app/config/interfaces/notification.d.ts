import { NotificationEnum } from '../enums/notification-enum'

declare global {
  export interface Notification {
    id: string
    content: string
    type: NotificationEnum
  }
}

import { StatusEnum } from '../constants/status'

export interface TaskHistoryType {
  id: number
  status: StatusEnum
  date: Date
}

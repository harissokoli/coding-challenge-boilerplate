import { TaskHistoryType } from './TaskHistoryType'
import { StatusEnum } from '../constants/status'

export interface TaskType {
  id: number
  title: string
  description: string
  dateCreated: Date
  status: StatusEnum
  history?: TaskHistoryType[]
}

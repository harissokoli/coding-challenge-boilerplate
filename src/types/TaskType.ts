import { TaskHistoryType } from './TaskHistoryType'

export interface TaskType {
  id: number
  title: string
  description: string
  dateCreated: string
  status: string
  history?: TaskHistoryType[]
}

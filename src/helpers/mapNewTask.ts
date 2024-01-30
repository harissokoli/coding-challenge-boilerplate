import { TaskType } from '../types/TaskType'
import { StatusEnum } from '../constants/status'

interface NewTask {
  title: string
  description: string
}

const mapNewTask = (newTask: NewTask, tasks: TaskType[]) => {
  return {
    ...newTask,
    id: tasks.length + 1,
    dateCreated: new Date(),
    status: StatusEnum.TO_DO,
    history: [
      {
        id: 1,
        status: StatusEnum.TO_DO,
        date: new Date(),
      },
    ],
  }
}

export default mapNewTask

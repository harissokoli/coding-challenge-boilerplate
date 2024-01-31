import { TaskType } from '../types/TaskType'
import { StatusEnum } from '../constants/status'

interface EditedTask {
  title: string
  status: StatusEnum
  description: string
}

const mapEditedTask = (newTask: EditedTask, task: TaskType) => {
  return {
    ...task,
    ...newTask,
    history: [
      ...task.history,
      {
        id: task.history.length + 1,
        status: newTask.status,
        date: new Date(),
      },
    ],
  }
}

export default mapEditedTask

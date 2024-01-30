import { createContext } from 'react'

import { TaskType } from '../types/TaskType'

const Context = createContext<{
  tasks: TaskType[]
  addTask: (task: TaskType) => void
  editTask: (id: number, task: TaskType) => void
  removeTask: (id: number) => void
}>({
  tasks: [],
  addTask: () => {},
  editTask: () => {},
  removeTask: () => {},
})

export default Context

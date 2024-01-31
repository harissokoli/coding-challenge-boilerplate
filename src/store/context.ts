import { createContext } from 'react'

import { TaskType } from '../types/TaskType'

const Context = createContext<{
  tasks: TaskType[]
  removeTask: (id: number) => void
  addTask: (task: TaskType) => void
  editTask: (task: TaskType) => void
}>({
  tasks: [],
  addTask: () => {},
  editTask: () => {},
  removeTask: () => {},
})

export default Context

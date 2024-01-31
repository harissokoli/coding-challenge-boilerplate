import { PropsWithChildren, useEffect, useState } from 'react'
import { TaskType } from '../types/TaskType'
import Context from './context'

const Provider = ({ children }: PropsWithChildren) => {
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const localTasks = localStorage.getItem('tasks')
    return localTasks ? JSON.parse(localTasks) : []
  })

  const addTask = (task: TaskType) => {
    setTasks([...tasks, task])
  }
  const editTask = (task: TaskType) => {
    const t = tasks.find(tasks => tasks.id === task.id)
    const filteredTasks = tasks.filter(tasks => tasks.id !== task.id)

    const updatedTask = {
      ...t,
      ...task,
    }

    setTasks([...filteredTasks, updatedTask])
  }

  const removeTask = (id: number) => {
    setTasks(tasks.filter(tasks => tasks.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <Context.Provider value={{ tasks, addTask, removeTask, editTask }}>
      {children}
    </Context.Provider>
  )
}

export default Provider

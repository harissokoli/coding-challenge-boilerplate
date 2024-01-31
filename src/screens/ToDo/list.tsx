import { useContext } from 'react'

import { Container } from '@mui/material'

import Context from '../../store/context'

import AddTask from '../../components/AddTask'
import TasksList from '../../components/TasksList'

const ToDoList = () => {
  const { tasks } = useContext(Context)

  return (
    <>
      <Container maxWidth="md">
        <AddTask />
        <TasksList tasks={tasks} />
      </Container>
    </>
  )
}

export default ToDoList

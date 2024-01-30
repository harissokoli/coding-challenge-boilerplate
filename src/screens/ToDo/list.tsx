import { Container } from '@mui/material'

import AddTask from '../../components/AddTask'
import TasksList from '../../components/TasksList'

import todos from '../../__mock__/todos'

const ToDoList = () => {
  return (
    <>
      <Container maxWidth="lg">
        <AddTask />
        <TasksList tasks={todos} />
      </Container>
    </>
  )
}

export default ToDoList

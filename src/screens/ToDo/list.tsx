import { Container } from '@mui/material'

import AddTask from '../../components/AddTask'
import TasksList from '../../components/TasksList'

const ToDoList = () => {
  const tasks = [
    {
      id: 0,
      title: 'lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam sagittis lorem. Nullam a nisi vulputate, tincidunt elit sit amet, tincidunt libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus auctor diam ut nulla porta, non tincidunt velit volutpat. Sed fermentum suscipit turpis, a lacinia velit faucibus nec. Vestibulum dictum arcu non nibh iaculis scelerisque. Integer accumsan dui gravida justo egestas, nec blandit leo congue. In pellentesque nisi eu sodales sagittis. Donec mattis sem libero, et pretium turpis convallis in. Quisque non semper lorem, id tincidunt lacus. Nullam consequat, ante eget mollis accumsan, sem tortor interdum quam, non vestibulum tortor enim quis odio. Nam blandit nisl at turpis dignissim, ac mattis arcu consequat. Pellentesque quis ullamcorper urna, vel euismod diam. Ut faucibus finibus tellus tincidunt finibus. Curabitur condimentum erat in libero euismod, ac pharetra nunc consequat Duis sit amet quam et velit fermentum auctor. Praesent commodo tempus varius. Donec fermentum mi augue, at scelerisque nisi faucibus ornare. Nulla sapien mauris, condimentum ut cursus in, consequat eget dolor. Nullam ullamcorper venenatis semper. Mauris placerat eros in nunc viverra, et dictum metus pharetra. Vivamus a nulla in dui facilisis suscipit. Mauris nunc leo, molestie sed ante eu, tincidunt feugiat mi. Mauris et lacus volutpat, aliquet tellus at, vehicula mauris. Nunc vel leo eu mauris consectetur interdum sit amet facilisis ex. Fusce fermentum iaculis aliquet. Suspendisse fringilla nibh vitae tellus accumsan cursus et a felis. Donec at nulla sapien. Praesent pharetra urna justo, sit amet posuere risus eleifend sit amet. Sed rhoncus metus quis facilisis dictum.',
      dateCreated: new Date().toString(),
      status: 'new',
      history: [
        {
          id: 2,
          status: 'in progress',
          date: new Date(),
        },
      ],
    },
    {
      id: 3,
      title: '123 lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, at nulla sapien. Praesent pharetra urna justo, sit amet posuere risus eleifend sit amet. Sed rhoncus metus quis facilisis dictum.',
      dateCreated: new Date().toString(),
      status: 'new',
      history: [],
    },
  ]

  return (
    <>
      <Container maxWidth="lg">
        <AddTask />
        <TasksList tasks={tasks} />
      </Container>
    </>
  )
}

export default ToDoList

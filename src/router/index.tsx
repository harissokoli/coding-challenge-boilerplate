import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import ToDoList from '../screens/ToDo/list'
import ToDoEdit from '../screens/ToDo/edit'

const routes = [
  {
    path: '/',
    element: <ToDoList />,
  },
  {
    path: 'edit/:id',
    element: <ToDoEdit />,
  },
]

function Router() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Routes>
        {routes.map(el => (
          <Route key={el.path} path={el.path} element={<>{el.element}</>} />
        ))}

        {/* Everything else */}
        <Route path="*" element={<div>404: This route doesnt exist</div>} />
      </Routes>
    </>
  )
}

export default Router

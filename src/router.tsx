import { createBrowserRouter, Navigate } from 'react-router'
import { CoursesPage } from './pages/courses-page'

export const router = createBrowserRouter([
  {
    path: '/courses',
    element: <CoursesPage />,
  },
  {
    path: '*',
    element: (
      <Navigate
        to="/courses"
        replace
      />
    ),
  },
])

import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', name: 'Dashboard', element: Dashboard },
  { path: '/courses', exact: true, name: 'courses' },
  { path: '/settings', exact: true, name: 'settings' },
  { path: '/students', exact: true, name: 'students' },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes

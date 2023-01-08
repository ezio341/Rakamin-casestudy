// import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DefaultLayout from './layouts/default';

import {
  useRoutes,
} from 'react-router-dom'
import RequireAuth from './components/RequireAuth';
import Login from './pages/Login';

function App() {
  let routes = useRoutes([
    {path: '/login', element: <Login />},
    {element: <DefaultLayout />, children:[
      {element: <RequireAuth />, children:[
        {path: '/', element:<Dashboard />}
      ]}
    ]}
  ])
  return routes
}

export default App;

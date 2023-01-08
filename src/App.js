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
    {element: <RequireAuth />, children:[
      {element: <DefaultLayout />, children:[
        {path: '/', element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        )}
      ]}
    ]}
  ])
  return routes
}

export default App;

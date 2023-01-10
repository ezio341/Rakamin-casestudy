// import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DefaultLayout from './layouts/default';

import {
  Navigate,
  useRoutes,
} from 'react-router-dom'
import RequireAuth from './components/RequireAuth';
import Login from './pages/Login';
import FallbackRoute from './components/FallbackRoute';
import Register from './pages/Register';

function App() {
  let relativePath = process.env.REACT_APP_VERSION

  let routes = useRoutes([
    {path:'/', element: <Navigate to={`/${relativePath}`}/>},
    {path: `/${relativePath}/login`, element: <Login />},
    {path: `/${relativePath}/register`, element: <Register />},
    {element: <DefaultLayout />, children:[
      {element: <RequireAuth />, children:[
        {path: `/${relativePath}`, element:<Dashboard />}
      ]}
    ]},
    {
      path: '*',
      element: <FallbackRoute relativePath={relativePath}/>
    }
  ])
  return routes
}

export default App;

// import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DefaultLayout from './layouts/default';

import {
  Navigate,
  useRoutes,
} from 'react-router-dom'
import RequireAuth from './components/RequireAuth';
import Login from './pages/Login';

function App() {
  let relativePath = process.env.REACT_APP_VERSION
  let routes = useRoutes([
    {path:'/', element: <Navigate to={`/${relativePath}`}/>},
    {path: `/${relativePath}/login`, element: <Login />},
    {element: <DefaultLayout />, children:[
      {element: <RequireAuth />, children:[
        {path: `/${relativePath}`, element:<Dashboard />}
      ]}
    ]}
  ])
  return routes
}

export default App;

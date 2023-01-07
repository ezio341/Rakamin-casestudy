// import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DefaultLayout from './layouts/default';

function App() {
  return (
    <DefaultLayout children={<Dashboard/>}></DefaultLayout>
  );
}

export default App;

import Login from './pages/Login'
import DefaultLayout from './layouts/default';

function App() {
  return (
    <DefaultLayout children={<Login/>}></DefaultLayout>
  );
}

export default App;

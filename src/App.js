// import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import TopBar from './Components/topbar/TopBar';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {
  let router = useRoutes(routes)
  return (

    <div className="App">

      <TopBar />
      <div className='container'>
        <Sidebar />
        {router}
      </div>

    </div>
  );
}

export default App;

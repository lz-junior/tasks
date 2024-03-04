import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div>
      <Outlet/>
      <ToastContainer autoClose={3000}/>
    </div>
  )
}

export default App;
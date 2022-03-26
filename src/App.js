import { Route, Routes } from 'react-router-dom';
import Staking from './pages/Staking';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Staking />} />
        <Route path='/stake' element={<Staking />} />
      </Routes>
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;

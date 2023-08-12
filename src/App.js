import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import Products from './Pages/product';
import Information from './Pages/information';
import Single from './Pages/singleproduct';
import BasicNavbar from './Components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <BasicNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/information' element={<Information />} />
        <Route path='/product' element={<Products />} />
        <Route path='/singleproduct' element={<Single />} />
      </Routes>
    
    </div>
  );
}

export default App;
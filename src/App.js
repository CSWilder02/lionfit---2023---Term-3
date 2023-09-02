import './App.css';
import { Route, Routes } from 'react-router-dom';
import Form from './form/form'
import Home from './Pages/home';
import FormUpdate from './form/update';
import Products from './Pages/product';
import Information from './Pages/information';
import Single from './Pages/singleproduct';
import BasicNavbar from './Components/navbar';
import Login from './Pages/login'
import Cart from './Pages/cart'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <BasicNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/information' element={<Information />} />
        <Route path='/product' element={<Products />} />
        <Route path='/singleproduct/:id' element={<Single />} />
        <Route path='/form' element={<Form />} />
        <Route path='/update/:id' element={<FormUpdate />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    
    </div>
  );
}

export default App;``
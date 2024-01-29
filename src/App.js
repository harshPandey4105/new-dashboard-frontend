
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/signup';
import Footer from './components/footer';
import Login from './components/login';
import PrivateCom from './components/privateCom';
import Add_Product from './components/addProduct';
import Update_Product from './components/updateProduct';
import Products from './components/product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route element={<PrivateCom/>}>
              <Route path='/' element={<Products/>}/>
              <Route path='/add' element={<Add_Product/>}/>
              <Route path='/update/:id' element={<Update_Product/>}/>
              <Route path='/profile' element={<h1>profile</h1>}/>
            </Route>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

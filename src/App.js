// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import NotFound from './Components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logout from './Components/Logout';
import User from './Components/User';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<ProductList />}  exact/>
        <Route path='/details' element={<Details />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/user' element={<User />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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
import { ProductContext, UserContext } from './Components/Context/Context';
import { useState, useEffect } from 'react';
import { storeProducts, detailProduct } from './data';


function App() {
  const [products, setProducts] = useState({
    product : storeProducts,
    detailProduct : detailProduct
  });

  const handleDetail = () => {
    console.log("hello from detail");
  };

  const addToCart = () => {
    console.log("hello from cart");
  };

  useEffect(() => {
    setProducts(prevState => ({
      ...prevState,
      handleDetail,
      addToCart
    }));
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={"Parthiban"}>
      <ProductContext.Provider value={products}>
      <Navbar />
      <Routes>
        <Route index element={<ProductList />}  exact/>
        <Route path='/details' element={<Details />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/user' element={<User />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </ProductContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

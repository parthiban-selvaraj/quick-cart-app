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
import Modal from './Components/Modal';


function App() {
  const [products, setProducts] = useState({
    product: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  });

  useEffect(() => {
    let tempProduct = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProduct = [...tempProduct, singleItem];
    });
    setProducts((prevState) => ({
      ...prevState,
      product: tempProduct
    }));
  }, []);

  // getting a id of product from selected item and coparing with store data
  const getItem = id => {
    const product = products.product.find(item => item.id === id);
    console.log('product details from json', product);
    return product;
  };
  // once search id matches then set that product data to detailProduct JSON
  const handleDetail = id => {
    console.log('click from product page and id is', id)
    const product = getItem(id);

    setProducts(prevState => ({
      ...prevState,
      detailProduct: product
    }));
  };

  const addToCart = id => {
    console.log(`id from details page ${id}`);
    let tempProducts = [...products.product];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    setProducts(prevState => ({
      ...prevState,
      product: tempProducts,
      cart: [...products.cart, product]
    }));
  };

  const openModal = id => {
    const product = getItem(id);
    setProducts(prevState => ({
      ...prevState,
      modalProduct: product,
      modalOpen: true
    }));
  };

  const closeModal = () => {
    setProducts(prevState => ({
      ...prevState,
      modalOpen: false
    }))
  };

  const increment = (id) => {
    console.log('increment function');
  }

  const decrement = (id) => {
    console.log('decrement function');
  }

  const removeItem = (id) => {
    console.log('item remove function');
  }

  const clearCart = () => {
    console.log('cart cleared');
  }
  
  useEffect(() => {
    let subTotal = 0;
    products.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setProducts(prevState => ({
      ...prevState,
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total
    }))
  }, [products.cart])


  // useEffect(() => {
  //   setProducts(prevState => ({
  //     ...prevState,
  //     handleDetail,
  //     addToCart
  //   }));
  // }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={"Parthiban"}>
        <ProductContext.Provider value={{
          ...products,
          handleDetail,
          addToCart,
          openModal,
          closeModal,
          increment,
          decrement,
          removeItem,
          clearCart
        }}>
          <Navbar />
          <Routes>
            <Route index element={<ProductList />} exact />
            <Route path='/details' element={<Details />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/user' element={<User />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Modal />
        </ProductContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import NotFound from './Components/NotFound';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Logout from './Components/Logout';
import User from './Components/User';
import { ProductContext, UserContext } from './Components/Context/Context';
import { useState, useEffect } from 'react';
import { storeProducts, detailProduct } from './data';
import Modal from './Components/Modal';
import Login from './Components/Login';
import Register from './Components/Register';
import About from './Components/About';
import Form from './Components/Form';
import Checkout from './Components/Cart/Checkout';


function App() {
  

  var productName = "";

  const navigate = useNavigate();

  const [user, setUser] = useState({
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    admin: false,
    loginStatus: false
  });


  // fetching persisted products state from local storage
  const savedState = JSON.parse(localStorage.getItem(`${user.firstName}`));

  // populate fresh state values if no data persisted in local storage
  const [products, setProducts] = useState({
    product: savedState ? savedState.product : [],
    detailProduct: savedState ? savedState.detailProduct : detailProduct,
    cart: savedState ? savedState.cart : [],
    user: savedState ? savedState.user : [],
    modalOpen: false,
    modalProduct: [],
    cartSubTotal: savedState ? savedState.cartSubTotal : 0,
    cartTax: savedState ? savedState.cartTax : 0,
    cartTotal: savedState ? savedState.cartTotal : 0
  });

  // useEffect(() => {
  //   let tempProduct = [];
  //   storeProducts.forEach((item) => {
  //     const singleItem = { ...item };
  //     tempProduct = [...tempProduct, singleItem];
  //   });
  //   setProducts((prevState) => ({
  //     ...prevState,
  //     product: tempProduct
  //   }));
  // }, []);

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

  const setLoginStatus = emailId => {
    // get user details from state with given email id 
    // for fetched user populate user state
    // if no details then route to /register page
    // const userDetail = JSON.parse(document.querySelector(`email:${emailId}`).value);
    // fetching persisted user state from local storage
    const userState = JSON.parse(localStorage.getItem(`${emailId}`));
    console.log('incoming email', emailId);
    console.log('sourced data', userState);
    
    if (userState === null) {
      // route to /Register
      alert(`given email id ${emailId} not found. Please register`);
      navigate("/register")
    } else {
      // if (Object.keys(userState).length === 0) {
      if (userState.email === emailId) {
  
        setUser(prevState => ({
           
         
          ...prevState,
          userId: userState.userId,
          firstName: userState.firstName,
          lastName: userState.lastName,
          email: userState.email,
          admin: userState.admin,
          loginStatus: true
        }))
        
      }
      navigate('/');
    }
  };


  const registerUser = () => {
    console.log('register user');
    let userId = 'testID';
    let firstName = 'test'
    let lastName ='test2'
    let email = 'test@gmail.com'
    let admin = false;
    let loginStatus = false;
    // check whether user exists already. if not then store them state and persist to local storage
    setUser(prevState => {
      localStorage.setItem(email, JSON.stringify({ ...user }));
      localStorage.setItem(`${user.firstName}`, JSON.stringify({ ...products }))
      return {
      ...prevState,
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      admin: admin,
      loginStatus: loginStatus
    };
  })
    alert(`${email} has been registered successfully`);
    navigate('/login');
}

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
  }, [products.cart]);


  // to persist products details to local storage
  useEffect(() => {
    localStorage.setItem(`${user.firstName}`, JSON.stringify({ ...products }))
  }, [products, user.firstName]);

  // to persist user details to local storage
  useEffect(() => {
    localStorage.setItem(`${user.email}`, JSON.stringify({ ...user }));
  }, [user, user.email]);

  const getProductName = (e) => {
    const recipeName = e.target.elements.productName.value;
    productName = recipeName;

    e.preventDefault();

    console.log('hello', productName);
    fetch(`https://fakestoreapi.com/products/category/${productName}`)
      .then((res) => res.json())
      .then((res) => setProducts(prevState => ({
        ...prevState,
        product: res
      })));
    window.scroll(0, 130);
  };

  // useEffect(() => {
  //   console.log('check');
  // }, [productName]);

  // useEffect(() => {
  //   setProducts(prevState => ({
  //     ...prevState,
  //     handleDetail,
  //     addToCart
  //   }));
  // }, []);

  return (
      <UserContext.Provider value={{
        ...user,
        setLoginStatus,
        registerUser
      }}>
        <ProductContext.Provider value={{
          ...products,
          handleDetail,
          addToCart,
          openModal,
          closeModal,
          increment,
          decrement,
          removeItem,
          clearCart,
          getProductName
        }}>
          <Navbar />
          <Routes>
            {/* <Route path='/' element={<Login />} > */}
            <Route path='/' element={user.loginStatus ? <ProductList /> : <Navigate to="/login" />} exact />
            <Route path='/about' element={user.loginStatus ? <About /> : <Navigate to="/login" />} />
            <Route path='/details' element={user.loginStatus ? <Details /> : <Navigate to="/login" />} />
            <Route path='/cart' element={user.loginStatus ? <Cart /> : <Navigate to="/login" />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/user' element={user.loginStatus ? <User /> : <Navigate to="/login" />} />
            <Route path='/checkout' element={user.loginStatus ? <Checkout /> : <Navigate to="/login" />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Modal />
        </ProductContext.Provider>
      </UserContext.Provider>
  );
}

export default App;

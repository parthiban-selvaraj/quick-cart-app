import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext, UserContext } from './Context/Context'
import ProductWrapper from './Styles/ProductWrapper';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
  const productFromContext = useContext(ProductContext);
  const valueFromContext = useContext(UserContext);
  return (
    <ProductWrapper className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
      {console.log("hello", productFromContext.product, product.id)}
      <div className='card'>
        <div className='img-container' onClick={() => productFromContext.handleDetail(product.id)}>
          <Link to={"/details"}>
            <img
              className='card-img-top'
              src={product.image}
              alt={product.title} 
              style={{maxHeight : "60%"}}
            />
          </Link>
          {/* cart button */}
          { !valueFromContext.user.admin && 
          <button
            className='cart-btn'
            disabled={product.inCart ? true : false}
            onClick={() => {
              productFromContext.addToCart(product.id);
              productFromContext.openModal(product.id);
            }
            }>
            {/* {console.log("state after add to cart", productFromContext)} */}
            { product.inCart ?
              (
                <p className='text-capitalize mb-0' disabled>in cart</p>
              ) : (
                <i className='fas fa-cart-plus' />
              )
            }
          </button> }
          {/* edit button */}
          { valueFromContext.user.admin ? 
          <Link to={"/details"} state={{ editOption: true }}>
            <button
              className='edit-btn'
              disabled={product.inCart ? true : false}
              onClick={() => productFromContext.handleDetail(product.id)}>
                  <i className='fas fa-pen' />
            </button>
          </Link> : null }
        </div>
        <div className='card-footer d-flex justify-content-between'>
          <p className='align-self-center mb-0'>
            {product.title < 20 ?
              `${product.title}` : `${product.title.substring(0, 25)}...`}
          </p>
          <h5 className='text-blue font-italic mb-0'>
            <span className='mr-1'>₹</span>
            {product.price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

export default Product;
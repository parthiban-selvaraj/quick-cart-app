import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from './Context/Context';
import ButtonContainer from './Styles/ButtonContainer';

const Details = () => {
  const productFromContext = useContext(ProductContext);
  const detailedProduct = productFromContext.detailProduct; 
  return (
    <>
      {console.log("from context-details page", productFromContext)}
      <div className='container py-5'>
        {/* title */}
        <div className='row'>
          <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
            <h1>{detailedProduct.title}</h1>
          </div>
        </div>
        {/* end of title */}
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <img src={detailedProduct.img} alt={detailedProduct.title} />
          </div>
          {/* product description */}
          <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
            <h3>model : {detailedProduct.title}</h3>
            <h5 className='text-title text-uppercase mt-3 mb-2'>
              made by : <span className='text-uppercase'>
                {detailedProduct.company}
              </span>
            </h5>
            <h4 className='text-blue'>
              <strong>
                price : <span>₹</span>
                {detailedProduct.price}
              </strong>
            </h4>
            <p className='text-capitalize font-weight-bold mt-3 mb-0'>
              <u><strong>product description :</strong></u> 
            </p>
            <p className='text-muted lead' style={{fontSize : '1rem'}}>
              {detailedProduct.info}
            </p>
            {/* buttons */}
            <div>
              <Link to={"/"}>
                <ButtonContainer>
                  back to products
                </ButtonContainer>
              </Link>
                <ButtonContainer 
                cart
                disabled={detailedProduct.inCart ? true : false}
                onClick={() => {
                  productFromContext.addToCart(detailedProduct.id)
                }}>
                  {detailedProduct.inCart ? "in cart" : "add to cart"}
                </ButtonContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details;
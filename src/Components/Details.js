import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ProductContext, UserContext } from './Context/Context';
import ButtonContainer from './Styles/ButtonContainer';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Details = () => {

  const valueFromContext = useContext(UserContext);
  const location = useLocation();
  console.log(location);
  const editOption = false;
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
          {/* col-10 mx-auto col-md-6 my-3 */}
          <div className='col-10 mx-auto col-md-6 my-3'>
            <img
              className='img-fluid'
              src={detailedProduct.image}
              alt={detailedProduct.title} />
          </div>
          {/* product description */}
          <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
            <div>
              <h3>model : 
              { editOption  ? <EditTextarea
                name='textarea'
                value={detailedProduct.title}
                inline/> : detailedProduct.title }
              </h3>
            </div>
            <h5 className='text-title text-uppercase mt-3 mb-2'>
              rating : <span className='font-weight-bold'>
                {detailedProduct.rating.rate}/5
                <span style={{ fontSize: "0.9rem" }}>
                  (based on {detailedProduct.rating.count} reviews).
                </span>
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
            <p className='text-muted lead' style={{ fontSize: '1rem' }}>
              {detailedProduct.description}
            </p>
            {/* buttons */}
            <div>
              <Link to={"/"}>
                <ButtonContainer>
                  back to products
                </ButtonContainer>
              </Link>
              {
                valueFromContext.user.admin &&
                 !editOption ?
                  <ButtonContainer>
                    edit
                  </ButtonContainer> : null
              }
              <ButtonContainer
                cart
                disabled={detailedProduct.inCart ? true : false}
                onClick={() => {
                  productFromContext.addToCart(detailedProduct.id)
                  productFromContext.openModal(detailedProduct.id)
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
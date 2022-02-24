import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ProductContext, UserContext } from './Context/Context';
import ButtonContainer from './Styles/ButtonContainer';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Details = () => {

  const valueFromContext = useContext(UserContext);
  const location = useLocation();
  const editOption = location.state ? location.state.editOption : false
  // var editOption = false;
  const [edit, setEdit] = useState({
    elementEdit: editOption,
    dataSave: false
  });
  const productFromContext = useContext(ProductContext);
  const detailedProduct = productFromContext.detailProduct;
  const handleEdit = () => {
    setEdit((prevState) => ({
      ...prevState,
      elementEdit: true
    }))
    console.log('inside click', edit)
  };


  const handleSave = () => {
    setEdit((prevState) => ({
      ...prevState,
      dataSave: true
    }))
  };

  const handleSubmit = () => {
    // fetch('https://fakestoreapi.com/products/7', {
    //   method: "PUT",
    //   body: JSON.stringify(
    //     {
    //       title: 'test product',
    //       price: 13.5,
    //       description: 'lorem ipsum set',
    //       image: 'https://i.pravatar.cc',
    //       category: 'electronic'
    //     }
    //   )
    // })
    //   .then(res => res.json())
    //   .then(json => console.log(json))
    console.log('updated successfully')
  }

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

              <h3>model : {edit.elementEdit ? <EditTextarea
                name='textarea'
                defaultValue={detailedProduct.title}
                style={{ paddingTop: "0" }}
                onSave={handleSave}
                inline /> : detailedProduct.title}
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
            <div style={{ display: 'flex' }}>
              <h4 className='text-blue'>
                <strong>
                  price : <span>₹</span>
                  {edit.elementEdit ? <EditText
                    name='price'
                    type='number'
                    defaultValue={detailedProduct.price.toString()}
                    style={{ paddingTop: "0" }}
                    onSave={handleSave}
                    inline /> : detailedProduct.price}
                </strong>
              </h4>
            </div>
            <p className='text-capitalize font-weight-bold mt-3 mb-0'>
              <u><strong>product description :</strong></u>
            </p>

            <div className='text-muted lead' style={{ fontSize: '1rem' }}>
              {edit.elementEdit ? <EditTextarea
                name='textarea'
                defaultValue={detailedProduct.description}
                style={{ paddingTop: "0" }}
                onSave={handleSave}
              /> : detailedProduct.description}
            </div>

            {/* buttons */}
            <div className='mt-3'>
              <Link to={"/"}>
                <ButtonContainer>
                  back to products
                </ButtonContainer>
              </Link>
              {
                valueFromContext.user.admin &&
                  !edit.elementEdit ?
                  <ButtonContainer cart onClick={() => handleEdit()}>
                    edit
                  </ButtonContainer> : null
              }
              {console.log('value of edir', save12)}
              {
                !valueFromContext.user.admin ?
                  <ButtonContainer
                    cart
                    disabled={detailedProduct.inCart ? true : false}
                    onClick={() => {
                      productFromContext.addToCart(detailedProduct.id)
                      productFromContext.openModal(detailedProduct.id)
                    }}>
                    {detailedProduct.inCart ? "in cart" : "add to cart"}
                  </ButtonContainer> : null}
              {
                edit.dataSave ?
                  <ButtonContainer cart onClick={() => handleSubmit()}>
                    save
                  </ButtonContainer> : null
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details;
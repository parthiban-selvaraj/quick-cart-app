import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ProductContext, UserContext } from './Context/Context';
import ButtonContainer from './Styles/ButtonContainer';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Details = () => {

  const valueFromContext = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
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

  const editProduct = {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    category: "women's clothing"
  }



  const handleSave = ({ name, value }) => {
    console.log('editted value', value);
    // var isSame = (editProduct[name] === editProduct.price);

    if (name === 'price') {
      value = Number(value);
    }
    editProduct[name] = value;
    console.log('isSame', editProduct);
    setEdit((prevState) => ({
      ...prevState,
      dataSave: true
    }))
  };

  const handleSubmit = id => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(
        {
          title: editProduct.title,
          price: editProduct.price,
          description: editProduct.description,
          image: detailedProduct.image,
          category: detailedProduct.category
        }
      )
    }).then(res => res.json())
      .then(json => {
        console.log(json);
        // do update result validate here
        alert("product updated successfully");
        navigate('/');
      })

  }

  const handleDelete = id => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        // add delete response validation
        alert("product deleted successfully");
        navigate('/');
      })
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
          <div className='col-10 mx-auto col-md-6 my-3 align-center'>
            <img
              // className='img-fluid align-center ms-auto mt-auto'
              className='img-fluid center-block d-block mx-auto'
              src={detailedProduct.image}
              alt={detailedProduct.title}
              style={{ maxHeight: "60%" }}
            />
          </div>
          {/* product description */}
          <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
            <div>

              <h3>model : {edit.elementEdit ? <EditTextarea
                name='title'
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
                name='description'
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
              {
                valueFromContext.user.admin &&
                  !edit.elementEdit ?
                  <ButtonContainer cart onClick={() => handleDelete(detailedProduct.id)}>
                    delete
                  </ButtonContainer> : null
              }
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
                  <ButtonContainer cart onClick={() => handleSubmit(detailedProduct.id)}>
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
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from './Context/Context';
import ButtonContainer from './Styles/ButtonContainer';
import ModalContainer from './Styles/ModalContainer';

const Modal = () => {
    const productFromContext = useContext(ProductContext);
    return (
        <div>
            {console.log(productFromContext.modalOpen)}
            {!productFromContext.modalOpen ?
                null : <ModalContainer>
                    <div className='container'>
                        <div className='row'>
                            <div
                                id='modal'
                                className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'>
                                <h5>item added</h5>
                                <img
                                    className='img-fluid'
                                    src={productFromContext.modalProduct.image}
                                    alt={productFromContext.modalProduct.title}
                                />
                                <h5>{productFromContext.modalProduct.title}</h5>
                                <h5 className='text-muted'>price : ₹ {productFromContext.modalProduct.price}</h5>
                                <Link to={"/"}>
                                    <ButtonContainer onClick={() => productFromContext.closeModal()}>
                                        continue shopping
                                    </ButtonContainer>
                                </Link>
                                <Link to={"/cart"}>
                                    <ButtonContainer
                                        cart
                                        onClick={() => productFromContext.closeModal()}>
                                        go to cart
                                    </ButtonContainer>
                                </Link>
                            </div>

                        </div>
                    </div>
                </ModalContainer>}
        </div>
    )
}

export default Modal;
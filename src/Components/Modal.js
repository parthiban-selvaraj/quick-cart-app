import React, { useContext } from 'react'
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
                            <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'>
                                <h5>item added</h5>
                            </div>

                        </div>
                    </div>
                </ModalContainer>}
        </div>
    )
}

export default Modal;
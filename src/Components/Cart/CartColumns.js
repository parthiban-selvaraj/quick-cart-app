import React from 'react'

const CartColumns = () => {
    return (
        <div className='container-fluid text-center d-none d-lg-block'>
            <hr style={{marginBottom : "1rem", borderTop: "1.5px solid darkblue", background : "transparent"}}></hr>
            <div className='row'>
                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>products</p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>name of product</p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>price</p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>quantity</p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>remove</p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>total</p>
                </div>

            </div>
            <hr style={{margin : "0rem", borderTop: "1.5px solid darkblue", background : "transparent"}}></hr>
        </div>
    )
}

export default CartColumns;
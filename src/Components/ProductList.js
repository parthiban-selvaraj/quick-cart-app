import React from 'react';
import Product from './Product';
import Title from './Title';

const ProductList = () => {
    return (
        <>
            <div className='py-5'>
                <div className='container'>
                    <Title name={'mobile'} title={'products'}/>
                    <div className='row'>
                        <Product />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList; 
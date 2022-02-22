import React, { useContext } from 'react';
import { ProductContext } from './Context/Context';
import Product from './Product';
import Title from './Title';

const ProductList = () => {
    const productFromContext = useContext(ProductContext);
    
    return (
        <>
            <div className='py-5'>
                <div className='container'>
                    <Title name={'mobile'} title={'products'}/>
                    <div className='row'>
                        {console.log(productFromContext)}
                        {
                            productFromContext.product ? 
                            productFromContext.product.map((product) => {
                                return (
                                    // <h4 key={product.id}>{product.title}</h4>
                                    <Product key={product.id} product={product}/>
                                )
                            }) : <h1>No results!</h1>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList; 
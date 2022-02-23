import React, { useContext } from 'react';
import { ProductContext } from './Context/Context';
import Form from './Form';
import Product from './Product';
import Title from './Title';

const ProductList = () => {
    const productFromContext = useContext(ProductContext);

    return (
        <>
            <div style={{ textAlign : "center", marginTop : "1.5rem", marginBottom : "0px"}}>
                <Form getProductName={productFromContext.getProductName} />
            </div>
            <div className='py-5'>
                <div className='container'>
                    {
                        productFromContext.product ?
                            <Title name={productFromContext.product[0].category} title={'products'} /> : null}
                    <div className='row'>
                        {console.log("from context", productFromContext)}
                        {
                            productFromContext.product ?
                                productFromContext.product.map((product) => {
                                    return (
                                        // <h4 key={product.id}>{product.title}</h4>
                                        <Product key={product.id} product={product} />
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
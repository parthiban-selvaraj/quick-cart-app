import React, { useContext } from 'react'
import { ProductContext } from './Context/Context'

const Product = ({product}) => {
  const productFromContext = useContext(ProductContext)
  return (
    <div>
      {console.log("hello", product)}
      <h3>{product.title}</h3>
    </div>
  )
}

export default Product
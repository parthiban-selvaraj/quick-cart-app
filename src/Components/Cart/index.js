import React, { useContext } from 'react';
import { ProductContext } from '../Context/Context';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const productFromContext = useContext(ProductContext);
  return (
    <section>
      {
        productFromContext.cart.length > 0 ?
          <>
            <Title name={"your"} title={"cart"} />
            <CartColumns />
            <CartList product={productFromContext}/>
            <CartTotals product={productFromContext} />
          </>
          : <EmptyCart />
      }
    </section>
  )
}

export default Cart;
import { createContext } from 'react';

const ProductContext = createContext();
const UserContext = createContext();

// const ProductProvider = () => {
//   return (
//     <ProductContext.Provider value={"hello from product context"}>

//     </ProductContext.Provider>
//   )
// }

// // const ProductConsumer = ProductContext.Consumer;

export {ProductContext, UserContext};
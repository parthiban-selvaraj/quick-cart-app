import UserReducer from "./UserReducer";
// import ProductReducer from "./ProductsReducer";
import { combineReducers } from 'redux';

const allReducers = combineReducers ({
    logged : UserReducer
    // product : ProductReducer
});

export default allReducers;

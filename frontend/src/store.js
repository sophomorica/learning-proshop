import { configureStore } from "@reduxjs/toolkit";
import { productListReducer, productDetailsReducer } from "./reducers/productReducers";

export default configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,

  },
});

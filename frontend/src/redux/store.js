import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice.js";
import cartReducer from "./slices/cartSlice.js";
import checkOutReducer from "./slices/checkOutSlice.js";
import orderReducer from "./slices/orderSlice.js";
import adminReducer from "./slices/adminSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    checkout: checkOutReducer,
    orders: orderReducer,
    admin: adminReducer,
  },
});

export default store;

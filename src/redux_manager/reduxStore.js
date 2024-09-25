import { configureStore } from "@reduxjs/toolkit";
import cartCountReducer from "./slices/cartCountSlice";
import enableBuyReducer from "./slices/enableBuy";

const reduxStore = configureStore({
    reducer:{
        cartCount: cartCountReducer,
        enableBuy: enableBuyReducer,
    }
})

export default reduxStore
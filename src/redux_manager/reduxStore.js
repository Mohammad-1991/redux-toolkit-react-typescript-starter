import { configureStore } from "@reduxjs/toolkit";
import cartCountReducer from "./slices/cartCountSlice";
import enableBuyReducer from "./slices/enableBuy";
import fetchPostReducer from "./slices/fetchPostsData";

const reduxStore = configureStore({
    reducer:{
        cartCount: cartCountReducer,
        enableBuy: enableBuyReducer,
        postsData: fetchPostReducer,
    }
})

export default reduxStore
import { configureStore } from "@reduxjs/toolkit";
import cartCountReducer from "./slices/cartCountSlice";
import enableBuyReducer from "./slices/enableBuy";
import fetchPostReducer from "./slices/fetchPostsData";

//This is the setup of our redux store

export const reduxStore = configureStore({
  reducer: {
    cartCount: cartCountReducer,
    enableBuy: enableBuyReducer,
    postsData: fetchPostReducer,
  },
});

// exports type to use in hooks/reduxHooks to have type checked dispatch and RootState(for selector)
export type AppDispatch = typeof reduxStore.dispatch;
export type RootState = ReturnType<typeof reduxStore.getState>;

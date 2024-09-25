import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const cartCountSlice = createSlice({
    name: 'cartCount',
    initialState,
    reducers:{
        addToCart: (state) => {state.value += 1},
        removeFromCart: (state) => {state.value -= 1},
    }


})
export const {addToCart, removeFromCart} = cartCountSlice.actions
export default cartCountSlice.reducer
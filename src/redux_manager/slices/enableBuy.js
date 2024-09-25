import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}
const enableBuySlice = createSlice({
    name:'enableBuy',
    initialState,
    reducers:{
        setBuyComp: (state, value) =>{ state.value = value.payload},
      
    }
})

export const {setBuyComp} = enableBuySlice.actions
export default enableBuySlice.reducer
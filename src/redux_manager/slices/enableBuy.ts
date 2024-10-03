import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type check redux slice / solid
type EnableBuyState = {
  value: boolean;
};
type EnableBuyPayloadAction = PayloadAction<boolean>;

const initialState: EnableBuyState = {
  value: false,
};

const enableBuySlice = createSlice({
  name: "enableBuy",
  initialState,
  reducers: {
    setBuyComp: (state: EnableBuyState, action: EnableBuyPayloadAction) => {
      state.value = action.payload;
    },
  },
});

export const { setBuyComp } = enableBuySlice.actions;
export default enableBuySlice.reducer;

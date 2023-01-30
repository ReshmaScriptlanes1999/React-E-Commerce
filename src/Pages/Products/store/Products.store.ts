import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@reduxjs/toolkit";

const initialState:{
    product_name: string;
    product_price: number;
    product_image: string;
    product_description: string;
} = {
    product_name: "",
    product_price: 0,
    product_image: "",
    product_description: ""
};



const ProductReducer = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    add_product_data: (
      state,
      action: PayloadAction<{
        product_name: string;
        product_price: number;
        product_image: string;
        product_description: string;
      }>
    ) => {
      state.product_name = action.payload.product_name;
      state.product_price=action.payload.product_price;
      state.product_image=action.payload.product_image;
      state.product_description=action.payload.product_description;
    },
  },
});
export const { add_product_data } = ProductReducer.actions;
export default ProductReducer.reducer;

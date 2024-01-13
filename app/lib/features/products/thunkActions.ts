import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isLoading: boolean;
  products: any[];
}

const initialState: InitialState = {
  isLoading: false,
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default productSlice.reducer;
export * from "./thunkActions";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";
import { toast } from "react-toastify";

// Create a thunk to handle the async request to the API

export const getAllProducts = createAsyncThunk(
  "product/get",
  async (thunkAPI) => {
    try {
      return await productService.getproducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addToWishlistProduct = createAsyncThunk(
  "product/get",
  async (thunkAPI) => {
    try {
      return await productService.getproducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// initial state

const productState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  Message: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.Message = action.payload.toString();
      });
  },
});

export default productSlice.reducer;

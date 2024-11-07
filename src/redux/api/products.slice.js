import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAxios } from "@/hooks/useAxios";
// import { toast } from "react-toastify";

const initialState = {
    products: [],
    status: "idle",
    error: null,
};

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { get } = useAxios();
      const response = await get("/product");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getProducts.fulfilled, (state, {payload}) => {
      state.status = "succeeded";
      state.products = payload
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });

  },
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
    },
  },
});

export const { resetStatus } = productSlice.actions;

export default productSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAxios } from "@/hooks/useAxios";
// import { toast } from "react-toastify";

const initialState = {
    staff: [],
    status: "idle",
    error: null,
};

export const getStaff = createAsyncThunk(
  "staff/getStaff",
  async (data, { rejectWithValue }) => {
    try {
      const { get } = useAxios();
      const response = await get("/staff");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const staffSlice = createSlice({
  name: "staff",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getStaff.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getStaff.fulfilled, (state, {payload}) => {
      state.status = "succeeded";
      state.staff = payload
    });
    builder.addCase(getStaff.rejected, (state, action) => {
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

export const { resetStatus } = staffSlice.actions;

export default staffSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAxios } from "@/hooks/useAxios";
// import { toast } from "react-toastify";

const initialState = {
    vacancy: [],
    status: "idle",
    error: null,
};

export const getVacancy = createAsyncThunk(
  "vacancy/getVacancy",
  async (_, { rejectWithValue }) => {
    try {
      const { get } = useAxios();
      const response = await get("/vacancies/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const vacancySlice = createSlice({
  name: "vacancy",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getVacancy.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getVacancy.fulfilled, (state, {payload}) => {
      state.status = "succeeded";
      state.vacancy = payload
    });
    builder.addCase(getVacancy.rejected, (state, action) => {
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

export const { resetStatus } = vacancySlice.actions;

export default vacancySlice.reducer;
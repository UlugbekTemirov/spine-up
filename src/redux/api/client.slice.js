import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAxios } from "@/hooks/useAxios";
// import { toast } from "react-toastify";

const initialState = {
    status: "idle",
    error: null,

    vacancyStatus: 'idle',
    vacancyError: null
};

export const postClientData = createAsyncThunk(
  "client/postClientData",
  async (data, { rejectWithValue }) => {
    try {
      const { post } = useAxios();
      const response = await post("/client-data/", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const applyVacancy = createAsyncThunk(
    "client/applyVacancy",
    async (data, { rejectWithValue }) => {
      try {
        const { post } = useAxios();
        const response = await post("/applications/", data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

export const clientSlice = createSlice({
  name: "client",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postClientData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(postClientData.fulfilled, (state) => {
      state.status = "succeeded";
    });
    builder.addCase(postClientData.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });

    builder.addCase(applyVacancy.pending, (state) => {
        state.vacancyStatus = "loading";
      });
      builder.addCase(applyVacancy.fulfilled, (state) => {
        state.vacancyStatus = "succeeded";
      });
      builder.addCase(applyVacancy.rejected, (state, action) => {
        state.vacancyStatus = "failed";
        state.vacancyError = action.payload;
      });
  },
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.vacancyStatus = 'idle'
    },
  },
});

export const { resetStatus } = clientSlice.actions;

export default clientSlice.reducer;
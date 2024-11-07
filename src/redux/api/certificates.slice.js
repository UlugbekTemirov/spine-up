import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAxios } from "@/hooks/useAxios";
// import { toast } from "react-toastify";

const initialState = {
    companyCertificate: [],
    status: "idle",
    error: null,

    staffCertificate: [],
    staffStatus: "idle",
staffError: null
};

export const getCompanyCertificate = createAsyncThunk(
  "certificates/getCompanyCertificate",
  async (data, { rejectWithValue }) => {
    try {
      const { get } = useAxios();
      const response = await get("/company-certificate");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getStaffCertificate = createAsyncThunk(
    "certificates/getStaffCertificate",
    async (id, { rejectWithValue }) => {
      try {
        const { get } = useAxios();
        const response = await get("/certificate/" + id);
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

export const certificatesSlice = createSlice({
  name: "certificates",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCompanyCertificate.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCompanyCertificate.fulfilled, (state, {payload}) => {
      state.status = "succeeded";
      state.companyCertificate = payload
    });
    builder.addCase(getCompanyCertificate.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });

    builder.addCase(getStaffCertificate.pending, (state) => {
        state.staffStatus = "loading";
      });
      builder.addCase(getStaffCertificate.fulfilled, (state, {payload}) => {
        state.staffStatus = "succeeded";
        state.staffCertificate = payload
      });
      builder.addCase(getStaffCertificate.rejected, (state, action) => {
        state.staffStatus = "failed";
        state.staffError = action.payload;
      });

  },
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.staffStatus = 'idle'
    },
  },
});

export const { resetStatus } = certificatesSlice.actions;

export default certificatesSlice.reducer;
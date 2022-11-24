import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseURL";

//Create Banner Action
export const createBannerAction = createAsyncThunk(
    "banner/create",
    async (banner, { rejectWithValue, getState, dispatch }) => {
    // Get User Token
    const user=getState()?.users
    const {userAuth} = user
    const config={
        headers:{
            Authorization: `Bearer ${userAuth?.token}`
        },
    }

    //http call
        try {
        const { data } = await axios.post(`${baseUrl}/banner/new`, {
            public_id: banner?.public_id,
            url: banner.secure_url,
        }, 
            config
        );
        return data
        } catch (error) {
        if (!error?.response) {
            throw error;
        }
        return rejectWithValue(error?.response?.data);
        }
    }
);

// Fetch Banner Action
export const fetchBannerAction = createAsyncThunk(
  "banner/fetch",
  async (banner, { rejectWithValue, getState, dispatch }) => {
  // Get User Token
  const user=getState()?.users
  const {userAuth} = user
  const config={
      headers:{
          Authorization: `Bearer ${userAuth?.token}`
      },
  }

  //http call
      try {
      const { data } = await axios.get(`${baseUrl}/banners`, 
          config
      );
      return data
      } catch (error) {
      if (!error?.response) {
          throw error;
      }
      return rejectWithValue(error?.response?.data);
      }
  }
);


//Delete Banner Action
export const deleteBannerAction = createAsyncThunk(
  "banner/delete",
  async (id, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    //http call
    try {
      const { data } = await axios.delete(
        `${baseUrl}/banners/${id}`,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Slices
const bannerSlices = createSlice({
    name: "banner",
    initialState: {},
    extraReducers: (builder) => {
      // Create banner Reducers
      builder.addCase(createBannerAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(createBannerAction.fulfilled, (state, action) => {
        state.banner = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(createBannerAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });
  
      // Fetch banner Reducers
      builder.addCase(fetchBannerAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(fetchBannerAction.fulfilled, (state, action) => {
        state.fetchBanner = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(fetchBannerAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      })

      // Delete
      builder.addCase(deleteBannerAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(deleteBannerAction.fulfilled, (state, action) => {
        state.deletedBanner = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(deleteBannerAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      })
    },  
  });
  
  export default bannerSlices.reducer;

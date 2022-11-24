import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseURL";

//Create Nursery Action
export const createNurseryAction = createAsyncThunk(
    "nursery/create",
    async (nursery, { rejectWithValue, getState, dispatch }) => {
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
        const { data } = await axios.post(`${baseUrl}/nursery/new`, {
            name: nursery?.name,
            address: nursery?.address,
            email: nursery?.email,
            phone: nursery?.phone,
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

// Fetch Nurseries Action
export const fetchNurseryAction = createAsyncThunk(
  "nursery/fetch",
  async (nursery, { rejectWithValue, getState, dispatch }) => {
  // Get User Token
  // const user=getState()?.users
  // const {userAuth} = user
  // const config={
  //     headers:{
  //         Authorization: `Bearer ${userAuth?.token}`
  //     },
  // }

  //http call
      try {
      const { nurseries } = await axios.get(`${baseUrl}/nurseries`, 
          // config
      );
      return nurseries
      } catch (error) {
      if (!error?.response) {
          throw error;
      }
      return rejectWithValue(error?.response?.data);
      }
  }
);

//Update Nursery Action
export const updateNurseryAction = createAsyncThunk(
  "nursery/update",
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
      const { data } = await axios.put(
        `${baseUrl}/nurseries/${id}`, config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Remove Nursery Action
export const removeNurseryAction = createAsyncThunk(
  "nursery/delete",
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
        `${baseUrl}/nurseries/${id}`,
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
const nurserySlices = createSlice({
  name: "nursery",
  initialState: {},
  extraReducers: (builder) => {
    // Create Nursery Reducers
    builder.addCase(createNurseryAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createNurseryAction.fulfilled, (state, action) => {
      state.nursery = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(createNurseryAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    // Fetch nursery Reducers
    builder.addCase(fetchNurseryAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchNurseryAction.fulfilled, (state, action) => {
      state.nurseryList = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchNurseryAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    })

    // Update
    builder.addCase(updateNurseryAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateNurseryAction.fulfilled, (state, action) => {
      state.updateNursery = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(updateNurseryAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    })

    // Delete
    builder.addCase(removeNurseryAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(removeNurseryAction.fulfilled, (state, action) => {
      state.deletedNursery = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(removeNurseryAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    })
  },  
});

export default nurserySlices.reducer;
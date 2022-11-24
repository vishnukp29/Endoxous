import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseURL";

//Create cart Action
export const createCartAction = createAsyncThunk(
    "cart/create",
    async (cart, { rejectWithValue, getState, dispatch }) => {
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
        const { data } = await axios.post(`${baseUrl}/cart/new`, {
            userEmail: cart?.email,
            user: cart?._id,
            cartItems: cart?.cartItems,
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

// Fetch user cart Action
export const fetchUserCartAction = createAsyncThunk(
  "cart/userCart",
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
      const { data } = await axios.get(`${baseUrl}/cart/me`, 
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


//Remove from Cart Action
export const removeCartAction = createAsyncThunk(
  "cart/remove",
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
        `${baseUrl}/cart/${id}`,
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

//Create Shipping Action
export const createShippingAction = createAsyncThunk(
    "shipping/create",
    async (shipping, { rejectWithValue, getState, dispatch }) => {
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
        const { data } = await axios.post(`${baseUrl}/shipping/new`, {
          shippingInfo: shipping?.shippingInfo,
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

// Fetch user cart Action
export const fetchShippingtAction = createAsyncThunk(
  "shipping/fetch",
  async (shipping, { rejectWithValue, getState, dispatch }) => {
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
      const { data } = await axios.get(`${baseUrl}/shipping`, 
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


//Remove from Cart Action
export const removeShippingAction = createAsyncThunk(
  "shipping/remove",
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
        `${baseUrl}/shipping/${id}`,
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
const cartSlices = createSlice({
    name: "cart",
    initialState: {},
    extraReducers: (builder) => {
      // Create cart Reducers
      builder.addCase(createCartAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(createCartAction.fulfilled, (state, action) => {
        state.cart = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(createCartAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });
  
      // Fetch user Cart Reducers
      builder.addCase(fetchUserCartAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(fetchUserCartAction.fulfilled, (state, action) => {
        state.fetchCart = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(fetchUserCartAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      })

      // Remove cartItems Reducers
      builder.addCase(removeCartAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(removeCartAction.fulfilled, (state, action) => {
        state.deletedCart = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(removeCartAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      })

      // Create Shipping Reducers
      builder.addCase(createShippingAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(createShippingAction.fulfilled, (state, action) => {
        state.shipped = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(createShippingAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });
  
      // Fetch shipping details Reducers
      builder.addCase(fetchShippingtAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(fetchShippingtAction.fulfilled, (state, action) => {
        state.shippingDetails = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(fetchShippingtAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      })

      // Remove Shipping Items Reducers
      builder.addCase(removeShippingAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(removeShippingAction.fulfilled, (state, action) => {
        state.removedShipping = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(removeShippingAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      })

    },  
  });
  
  export default cartSlices.reducer;

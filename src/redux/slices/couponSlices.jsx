import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseURL";

//Create Coupon Action
export const createCouponAction = createAsyncThunk(
    "coupon/create",
    async (coupon, { rejectWithValue, getState, dispatch }) => {
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
        const { data } = await axios.post(`${baseUrl}/coupon/new`, {
            couponName: coupon?.couponName,
            couponCode: coupon?.couponCode,
            limit: coupon?.limit,
            discount: coupon?.discount,
            expirationTime: coupon?.expirationTime,

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

// Fetch All Coupons Action
export const fetchAllCouponsAction = createAsyncThunk(
  "coupon/fetch",
  async (coupon, { rejectWithValue, getState, dispatch }) => {
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
      const { data } = await axios.get(`${baseUrl}/coupons`, 
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

// Fetch Single Coupon Action
export const fetchCouponDetailsAction = createAsyncThunk(
    "coupon/singleCoupon",
    async (id, { rejectWithValue, getState, dispatch }) => {
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
        const { data } = await axios.get(`${baseUrl}/coupons/${id}`, 
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

  //Update Coupon Action
    export const updateCouponAction = createAsyncThunk(
    "coupon/update",
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
          `${baseUrl}/coupons/${id}`,config);
        return data;
      } catch (error) {
        if (!error?.response) {
          throw error;
        }
        return rejectWithValue(error?.response?.data);
      }
    }
  );

    //Delete Coupon Action
    export const deleteCouponAction = createAsyncThunk(
    "coupon/delete",
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
        `${baseUrl}/coupons/${id}`,
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

//Verify Coupon Action
export const verifyCouponAction = createAsyncThunk(
    "coupon/verify",
    async (coupon, { rejectWithValue, getState, dispatch }) => {
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
        const { data } = await axios.post(`${baseUrl}/coupon/apply`, {
            totalPrice: coupon?.totalPrice,
            couponCode: coupon?.couponCode,
            orderID: coupon?.orderID,
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


// Slices
const couponSlices = createSlice({
    name: "coupon",
    initialState: {},
    extraReducers: (builder) => {
      // Create Coupon Reducers
      builder.addCase(createCouponAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(createCouponAction.fulfilled, (state, action) => {
        state.coupon = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(createCouponAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });
  
      // Fetch All Coupons Reducers
      builder.addCase(fetchAllCouponsAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(fetchAllCouponsAction.fulfilled, (state, action) => {
        state.allCoupons = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(fetchAllCouponsAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      })

      // Fetch  Coupon Details
      builder.addCase(fetchCouponDetailsAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(fetchCouponDetailsAction.fulfilled, (state, action) => {
        state.couponDetails = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(fetchCouponDetailsAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      })

      // EDit Coupon Reducers
      builder.addCase(updateCouponAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(updateCouponAction.fulfilled, (state, action) => {
        state.updatedCoupon = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(updateCouponAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      })


      // Delete Coupon Reducers
      builder.addCase(deleteCouponAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(deleteCouponAction.fulfilled, (state, action) => {
        state.deletedCoupon = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(deleteCouponAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      })

      // Verify Coupon Reducers
      builder.addCase(verifyCouponAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(verifyCouponAction.fulfilled, (state, action) => {
        state.verifiedCoupon = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(verifyCouponAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      })
    },  
  });
  
  export default couponSlices.reducer;

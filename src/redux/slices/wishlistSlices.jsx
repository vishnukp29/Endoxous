import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseURL";

//Create Banner Action
export const createWishlistAction = createAsyncThunk(
    "wishlist/create",
    async (product, { rejectWithValue, getState, dispatch }) => {
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
        const { data } = await axios.post(`${baseUrl}/wishlist/${product?.id}`, {
            userEmail: user?. userEmail,
            products: product.products,
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

// Fetch Wishlist Action
export const fetchWishlistAction = createAsyncThunk(
  "wishlist/fetch",
  async (wishlist, { rejectWithValue, getState, dispatch }) => {
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
      const { data } = await axios.get(`${baseUrl}/wishlist/me`, 
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
export const deleteWishlistAction = createAsyncThunk(
  "wishlist/delete",
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
        `${baseUrl}/whishlist/${id}`,
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
const wishlistSlices = createSlice({
    name: "wishlist",
    initialState: {},
    extraReducers: (builder) => {
      // Create whishlist Reducers
      builder.addCase(createWishlistAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(createWishlistAction.fulfilled, (state, action) => {
        state.wishlist = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(createWishlistAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });
  
      // Fetch whishlist Reducers
      builder.addCase(fetchWishlistAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(fetchWishlistAction.fulfilled, (state, action) => {
        state.wishlist = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(fetchWishlistAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      })

      // Delete
      builder.addCase(deleteWishlistAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(deleteWishlistAction.fulfilled, (state, action) => {
        state.deletedWishlist = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(deleteWishlistAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      })
    },  
  });
  
  export default wishlistSlices.reducer;

import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";
// import baseUrl from "../../../utils/baseURL";
import baseUrl from "../../utils/baseURL";

//Create Products action
const resetProduct = createAction("category/reset");
const resetProductEdit = createAction("product/reset");
const resetProductDelete = createAction("product/delete");

export const createProductAction = createAsyncThunk(
  "product/created",
  async (product, { rejectWithValue, getState, dispatch }) => {
    console.log(product);
    //get user action
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };

    try {
      //http call
      const formData = new FormData();
      formData.append("title", product?.title);
      formData.append("description", product?.description);
      formData.append("category", product?.category);
      formData.append("image", product?.image);
      console.log(formData, product);
      const { data } = await axios.post(
        `${baseUrl}/admin/products`,
        formData,
        config
      );
      dispatch(resetProduct())
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Update Products
export const updateProductAction = createAsyncThunk(
  "product/updated",
  async (product, { rejectWithValue, getState, dispatch }) => {
    console.log(product);
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      //http call
      const { data } = await axios.put(
        `${baseUrl}/admin/products/${product?.id}`,
        product,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Remove Products
export const removeProductAction = createAsyncThunk(
    "product/removed",
    async (product, { rejectWithValue, getState, dispatch }) => {
      console.log(product);
      //get user token
      const user = getState()?.users;
      const { userAuth } = user;
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.token}`,
        },
      };
      try {
        //http call
        const { data } = await axios.put(
          `${baseUrl}/admin/products/remove/${product?.id}`,
          product,
          config
        );
        return data;
      } catch (error) {
        if (!error?.response) throw error;
        return rejectWithValue(error?.response?.data);
      }
    }
  );

//Delete Products
export const deleteProductAction = createAsyncThunk(
  "product/delete",
  async (productId, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      //http call
      const { data } = await axios.delete(
        `${baseUrl}/admin/products/${productId}`,
        config
      );
      //dispatch
      dispatch(resetProductDelete());
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch all Products 
export const fetchProductAction = createAsyncThunk(
  "product/list",
  async (category, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`/products`);
      console.log(data,"========== Data product");
      return data
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch all Products Admin

export const fetchProductAdminAction = createAsyncThunk(
    "product/list",
    async (category, { rejectWithValue, getState, dispatch }) => {
      const user = getState()?.users;
      const { userAuth } = user;
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.token}`,
        },
      };
      try {
        const { data } = await axios.get(
          `${baseUrl}/admin/products?category=${category}`
        );
        return data.slice(0, 50);
      } catch (error) {
        if (!error?.response) throw error;
        return rejectWithValue(error?.response?.data);
      }
    }
  );
  
//fetch Products details
export const fetchProductDetails = createAsyncThunk(
  "product/detail",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${baseUrl}/products/${id}`);
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);


//fetch Related Products
export const fetchRelatedProduct = createAsyncThunk(
    "product/related",
    async (id, { rejectWithValue, getState, dispatch }) => {
      try {
        const { data } = await axios.get(`/products/related/${id}`);
        return data;
      } catch (error) {
        if (!error?.response) throw error;
        return rejectWithValue(error?.response?.data);
      }
    }
  );

//create product review
export const createProductReview = createAsyncThunk(
    "product/review",
    async (review, { rejectWithValue, getState, dispatch }) => {
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
          `${baseUrl}/api/review`,
          {
            name: review?.name,
            avatar: review?.avatar,
            rating: review?.rating,
            comment: review?.comment,
            user: review?.user,
          },
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

//fetch Reviews
export const fetchReviews= createAsyncThunk(
  "product/reviews",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${baseUrl}/reviews`);
      return data.products;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);
  
  // Delete Review
  export const deleteProductReview = createAsyncThunk(
    "product/delete-review",
    async (reviewId, { rejectWithValue, getState, dispatch }) => {
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
          `${baseUrl}/reviews`,
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

//slice
const productSlice = createSlice({
  name: "product",
  initialState: {},
  extraReducers: builder => {
    // Create Post
    builder.addCase(createProductAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetProduct,(state,action)=>{
      state.isCreated=true
    });
    builder.addCase(createProductAction.fulfilled, (state, action) => {
      state.productCreated = action?.payload;
      state.loading = false;
      state.isCreated=false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(createProductAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //Update post
    builder.addCase(updateProductAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetProductEdit, (state, action) => {
      state.isUpdated = true;
    });
    builder.addCase(updateProductAction.fulfilled, (state, action) => {
      state.productUpdated = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
      state.isUpdated = false
    });
    builder.addCase(updateProductAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //Remove Products
    builder.addCase(removeProductAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(removeProductAction.fulfilled, (state, action) => {
        state.productRemoved = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
        state.isRemoved = false
      });
      builder.addCase(removeProductAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
      });

    //Delete post
    builder.addCase(deleteProductAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetProductDelete, (state, action) => {
      state.isDeleted = true;
    });
    builder.addCase(deleteProductAction.fulfilled, (state, action) => {
      state.productDeleted = action?.payload;
      state.isDeleted = false;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deleteProductAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });


    //fetch product
    builder.addCase(fetchProductAction.pending,(state,action)=>{
      state.loading=true;
      
    });
    builder.addCase(fetchProductAction.fulfilled,(state,action)=>{
      
      state.products=action?.payload;      
      state.loading=false;
      state.hasMore=true;
      state.pageNumber=0
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchProductAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //fetch post Details
    builder.addCase(fetchProductDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
      state.productDetails = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchProductDetails.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    
    //Create Product Review
    builder.addCase(createProductReview.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(createProductReview.fulfilled, (state, action) => {
        state.review = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(createProductReview.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
    });

    //Get Product Review
    builder.addCase(fetchReviews.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.review = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchReviews.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
  });

    //Delete Product Review
    builder.addCase(deleteProductReview.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(deleteProductReview.fulfilled, (state, action) => {
        state.deletedReview = action?.payload;
        state.loading = false;
        state.appErr = undefined;
        state.serverErr = undefined;
      });
      builder.addCase(deleteProductReview.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverErr = action?.error?.message;
    });

  },
});

export default productSlice.reducer;
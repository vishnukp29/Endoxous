import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseURL";

//New Order Action
export const newOrderAction = createAsyncThunk(
    "order/new",
    async (order, { rejectWithValue, getState, dispatch }) => {
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
        const { data } = await axios.post(`${baseUrl}/order/new`, {
            shippingInfo:order?.shippingInfo,
            orderItems:order?.orderItems,
            paymentInfo:order?.paymentInfo,
            itemPrice:order?.itemPrice,
            taxPrice:order?.taxPrice,
            shippingPrice:order?.shippingPrice,
            totalPrice:order?.totalPrice,
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

// Get Single Order Action
export const fetchSingleOrderAction = createAsyncThunk(
  "order/fetch",
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
      const { data } = await axios.get(`${baseUrl}/order/${id}`, 
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

//Cancel Order Action
export const deleteOrderAction = createAsyncThunk(
  "order/cancel",
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
        `${baseUrl}/order/${id}`,
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


//Get My Orders
export const fetchMyOrderAction = createAsyncThunk(
  "order/myOrder",
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
      const { data } = await axios.get(`${baseUrl}/orders/me`);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Get All Orders - Admin
export const fetchAllOrdersAction = createAsyncThunk(
  "order/getAll",
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
      const { data } = await axios.get(`${baseUrl}/admin/orders`);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Get Single Order - Admin
export const adminSingleOrdersAction = createAsyncThunk(
  "order/getSingle",
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
      const { data } = await axios.get(`${baseUrl}/admin/orders/${id}`);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Update Order Status
export const updateOderStatusAction = createAsyncThunk(
  "order/update",
  async (id,order, { rejectWithValue, getState, dispatch }) => {
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
        `${baseUrl}/admin/order/${id}`,
        { orderStatus: order?.orderStatus }, config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Delete Order 
export const adminDeleteOderAction = createAsyncThunk(
  "order/delete",
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
        `${baseUrl}/admin/order/${id}`,config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Get Pending Orders - Admin
export const fetchPendingOrdersAction = createAsyncThunk(
  "order/pending",
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
      const { data } = await axios.get(`${baseUrl}/admin/orders/pending`);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Get Shipped Orders - Admin
export const fetchShippedOrdersAction = createAsyncThunk(
  "order/shipped",
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
      const { data } = await axios.get(`${baseUrl}/admin/orders/shipped`);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Get Delivered Orders - Admin
export const fetchDeliveredOrdersAction = createAsyncThunk(
  "order/delivered",
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
      const { data } = await axios.get(`${baseUrl}/admin/orders/delivered`);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Get Cancelled Orders - Admin
export const fetchCancelledOrdersAction = createAsyncThunk(
  "order/cancelled",
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
      const { data } = await axios.get(`${baseUrl}/admin/orders/cancelled`);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Assign to Nursery - Admin
export const assignToNurseryAction = createAsyncThunk(
  "order/assign",
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
      const { data } = await axios.post(`${baseUrl}/admin/orders/assignToUser/${id}`);
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
const orderSlices = createSlice({
  name: "order",
  initialState: {},
  extraReducers: (builder) => {
    // Create order Reducers
    builder.addCase(newOrderAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(newOrderAction.fulfilled, (state, action) => {
      state.order = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(newOrderAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    // Fetch single order Reducers
    builder.addCase(fetchSingleOrderAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSingleOrderAction.fulfilled, (state, action) => {
      state.orderList = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchSingleOrderAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    })

    // Cancell order Reducers
    builder.addCase(deleteOrderAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteOrderAction.fulfilled, (state, action) => {
      state.cancelledOrder = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deleteOrderAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    })

    // Fetch My order Reducers
    builder.addCase(fetchMyOrderAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMyOrderAction.fulfilled, (state, action) => {
      state.orderList = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchMyOrderAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    })

    // Get all orders Reducers
    builder.addCase(fetchAllOrdersAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllOrdersAction.fulfilled, (state, action) => {
      state.orderList = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchAllOrdersAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    })

    // Get Single order Reducers
    builder.addCase(adminSingleOrdersAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(adminSingleOrdersAction.fulfilled, (state, action) => {
      state.orderList = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(adminSingleOrdersAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    })
    
    // Update
    builder.addCase(updateOderStatusAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateOderStatusAction.fulfilled, (state, action) => {
      state.updateOrder = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(updateOderStatusAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    })

    // Delete
    builder.addCase(adminDeleteOderAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(adminDeleteOderAction.fulfilled, (state, action) => {
      state.deletedOrder = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(adminDeleteOderAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    })

    // Get Pending order Reducers
    builder.addCase(fetchPendingOrdersAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPendingOrdersAction.fulfilled, (state, action) => {
      state.orderList = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchPendingOrdersAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    })

    // Get Shipped order Reducers
    builder.addCase(fetchShippedOrdersAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchShippedOrdersAction.fulfilled, (state, action) => {
      state.orderList = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchShippedOrdersAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    })

    // Get Delivered order Reducers
    builder.addCase(fetchDeliveredOrdersAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchDeliveredOrdersAction.fulfilled, (state, action) => {
      state.orderList = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchDeliveredOrdersAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    })

    // Get Cancelled order Reducers
    builder.addCase(fetchCancelledOrdersAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCancelledOrdersAction.fulfilled, (state, action) => {
      state.orderList = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchCancelledOrdersAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    })

    // Assign to Nursery Reducers
    builder.addCase(assignToNurseryAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(assignToNurseryAction.fulfilled, (state, action) => {
      state.nursery = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(assignToNurseryAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    })      
    
  },  
});

export default orderSlices.reducer;
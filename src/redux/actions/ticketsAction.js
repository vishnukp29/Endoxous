import {
    ORDER_TICKETS_REQUEST,
    ORDER_TICKETS_SUCCESS,
    ORDER_TICKETS_FAIL,

    CLEAR_ERRORS,
  } from "../../constants/tiketsConstants";

  import axios from "../../axios";




// Order Tickets
export const getOrderTickets = (orderId) =>async (dispatch) => {
    try {
        dispatch({type : ORDER_TICKETS_REQUEST});


        const {data} = await axios.get(`/tickets/order/${orderId}`);
      

        dispatch({
            type : ORDER_TICKETS_SUCCESS,
            payload : data.orderTickets,
        });
        
    } catch (error) {
        dispatch({
            type : ORDER_TICKETS_FAIL,
            payload : error.response.data,
        })
        
    }

  };


  
  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
import {
    ORDER_TICKETS_REQUEST,
    ORDER_TICKETS_SUCCESS,
    ORDER_TICKETS_FAIL,

    CLEAR_ERRORS,
  } from "../../constants/tiketsConstants";

// All Orders --Admin
export const ordersTicketReducer = (state = {tickets:[]}, action) => {
    switch (action.type) {
        case ORDER_TICKETS_REQUEST:
            return {
                loading : true,
            };
        case ORDER_TICKETS_SUCCESS : 
            return {
                loading: false,
                tickets : action.payload,
            };
        case ORDER_TICKETS_FAIL : 
            return {
                loading: false,
                error : action.payload,
            };
        case CLEAR_ERRORS : 
            return {
                ...state,
                error : null,
            };
        default:
           return state;
    }

};
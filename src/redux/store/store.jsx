import { configureStore } from "@reduxjs/toolkit";

import categorySlices from "../slices/categorySlices";
import productSlices from "../slices/productSlices";
import orderSlices from "../slices/OrderSlices";
import bannerSlices from "../slices/bannerSlices";
import couponSlices from "../slices/couponSlices";
import cartSlices from "../slices/cartSlices";
import nurserySlices from "../slices/nurserySlices";
import wishlistSlices from "../slices/wishlistSlices";


const store = configureStore({
    reducer: {
        
        category:categorySlices,
        product: productSlices,
        orderSlices,
        cartSlices,
        bannerSlices,
        couponSlices,
        nurserySlices,
        wishlistSlices,
    }
})

export default store;
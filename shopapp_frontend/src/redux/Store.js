import { configureStore } from "@reduxjs/toolkit";
// import { CartReducer } from "./Slices/CartSlice";
import CartReducer from "./Slices/CartSlice"; // ✅ default import

// export const store = configureStore({
//     reducer:{
//         cart: CartSlice.reducer,
//     }
// });
export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
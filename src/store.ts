import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice";

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
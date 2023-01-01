import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./features/categoriesSlice";
import productsSlice from "./features/productsSlice";
import usersSlice from "./features/usersSlice";

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        categories: categoriesSlice.reducer,
        users: usersSlice.reducer,        
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
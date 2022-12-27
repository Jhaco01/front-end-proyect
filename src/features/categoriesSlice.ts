import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";

const url = 'https://fakestoreapi.com/products/categories';

interface categoryState {
    categoryList: string[];
    isLoading: boolean;
}

const initialState : categoryState = {
    categoryList: [],
    isLoading: false
}

export const getCategoriesList = createAsyncThunk<
    string[],
    unknown,
    {        
        dispatch: AppDispatch,
        state: RootState,
        rejectValue: string
    }
>('categories/getCategoriesList', async (foo, thunkApi)=>{

    try {
        
        const resp = await fetch(url);
        const data = await resp.json();
        return data;

    } catch (error) {

        return thunkApi.rejectWithValue('Ha ocurrido un error');
        
    }

});

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(getCategoriesList.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(getCategoriesList.fulfilled, (state, {payload})=>{
                state.isLoading = false;
                state.categoryList = payload;
            })
            .addCase(getCategoriesList.rejected, (state,action)=>{
                console.log(action);
                state.isLoading = false;
            })
    }

})

export default categoriesSlice;
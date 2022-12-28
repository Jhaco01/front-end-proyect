import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../models/models";
import { AppDispatch, RootState } from "../store";

const url = 'https://fakestoreapi.com/products';

interface productsState {
    productsList: Product[];
    isLoading: boolean;
}

const initialState : productsState = {
    productsList: [],
    isLoading: false
}

// In some cases, TypeScript may unnecessarily tighten the type of the initial state. 
// If that happens, you can work around it by casting the initial state using as, 
// instead of declaring the type of the variable:

// // Workaround: cast state instead of declaring variable type

// const initialState = {
//   value: 0,
// } as CounterState


export const getProductsList = createAsyncThunk<
  // Return type of the payload creator
  Product[],
  // First argument to the payload creator
  unknown,
  {
    // Optional fields for defining thunkApi field types
    dispatch: AppDispatch
    state: RootState
    rejectValue: string
  }
>('products/getProductsList', async (foo, thunkApi) => {
  
    try {

        const resp = await fetch(url)
        const data = await resp.json() as Product[];
        return data;

    } catch (error) {

        return thunkApi.rejectWithValue('Ha ocurrido un error.');

    }

})


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

        // All generated actions should be defined using the PayloadAction<T> type from Redux 
        // Toolkit, which takes the type of the action.payload field as its generic argument.

        // Use the PayloadAction type to declare the contents of `action.payload`,
        //for instance:
        // exampleReducer: (state, action: PayloadAction<Product> ) => {                     
        //     action.payload.category;
        // }
    },

    extraReducers: (builder) => {
        builder
          .addCase(getProductsList.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getProductsList.fulfilled, (state, action) => {            
            state.isLoading = false;
            state.productsList = action.payload;
          })
          .addCase(getProductsList.rejected, (state, action) => {
            console.log(action);
            state.isLoading = false;
          });
    }

});

export default productsSlice;
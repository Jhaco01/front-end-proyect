import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, Product } from "../models/models";

interface IUsersState {
    isLoggedIn: boolean;
    usersList: IUser[];
    currentUser: IUser;
    err: boolean;
}

const genericUser : IUser = {
    id: 'johngalt@email.comJohnG',
    name: 'John Galt',
    email: 'johngalt@email.com',
    cart: [],
    userName:'JohnG',
    password:'1234'
}

const initialState : IUsersState = {
    isLoggedIn: false,
    usersList: [genericUser],
    currentUser: {
        name: '',
        cart: []        
    },
    err: false
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        logIn: (state, action: PayloadAction<IUser>) => {            
            
            const {payload} = action;
            
            const user = state.usersList.find( user => (user.userName === payload.name || user.email === payload.name) && user.password === payload.password );

            return user? 
                {
                    ...state, 
                    isLoggedIn: true, 
                    currentUser: user, 
                    err: false
                } : {
                    ...state, 
                    err: true
                };            
                
        },
        logOut: (state) => {

            return {
                ...state,
                isLoggedIn: false,
                currentUser: {
                    name: '',
                    cart: []
                }
            }

        },
        signUp: (state,action: PayloadAction<IUser>) => {
            
            const {payload} = action;

            payload.id = `${payload.email}${payload.userName}`;

            const existingUser = state.usersList.find( user => user.userName === payload.userName  || user.email === payload.email );

            return existingUser ? 
                {
                    ...state,
                    err: true
                }
            : 
                {
                    ...state,                    
                    isLoggedIn: true,
                    usersList: [...state.usersList, payload],
                    currentUser: payload,
                    err: false
                }

        },
        updateUserCart :(state, action: PayloadAction<IUser>) => {
            
            if (!state.isLoggedIn) return;                    
            
            const userInList = state.usersList.find(user => user.id === action.payload.id);

            const indexOfUser = userInList ? state.usersList.indexOf(userInList) : -1;

            state.usersList[indexOfUser] = action.payload;            

        },
        addToCart : (state, action: PayloadAction<Product>) => {

            if (!state.isLoggedIn) return;

            let newItem = action.payload;
            const existingItem = state.currentUser.cart.find(cartItem => cartItem.id === newItem.id);                                        

            if (existingItem) {
                existingItem.quantity = existingItem.quantity + 1;                

            } else {
                newItem = {
                    ...newItem,
                    quantity: 1
                }
                state.currentUser.cart.push(newItem);
            }                  

        },
        removeFromCart : (state, action : PayloadAction<number>) => {

            const item = state.currentUser.cart.find(product => product.id === action.payload);

            if (!item) return;

            item.quantity === 1 ?
                state.currentUser.cart = state.currentUser.cart.filter( cartItem => cartItem.id !== action.payload )    
            : 
                item.quantity--;

        },
        calculateProductTotal : () => {

        },
        calculateTotals : () => {

        }
    }
});

export const {logIn, signUp, addToCart, removeFromCart, updateUserCart, logOut} = usersSlice.actions;

export default usersSlice;
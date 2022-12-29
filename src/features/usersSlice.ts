import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/models";

interface IUsersState {
    isLoggedIn: boolean;
    usersList: IUser[];
    currentUser: {} | IUser;
    error: boolean;
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
    currentUser: {},
    error: false
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        logIn: (state, action: PayloadAction<IUser>) => {            
            
            const {payload} = action;
            
            const user = state.usersList.find( user => user.id?.includes( payload.name ) && user.password === payload.password );

            user ? 
                state = {
                    ...state,
                    isLoggedIn: true,
                    currentUser: user,
                    error: false                    
                }
                :
                state = {
                    ...state,
                    error: true
                }
        },
        signIn: (state,action: PayloadAction<IUser>) => {
            
            const {payload} = action;

            const existingUser = state.usersList.find( user => user.userName === payload.userName  || user.email === payload.email );

            existingUser ? 
                state = {
                    ...state,
                    error: true
                }
                :
                state = {
                    ...state,
                    isLoggedIn: true,
                    usersList: [...state.usersList, payload],
                    currentUser: payload,
                    error: false
                }

        }        
    }
});

export default usersSlice;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/models";

interface IUsersState {
    isLoggedIn: boolean;
    usersList: IUser[];
    currentUser: {} | IUser;
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
    currentUser: {},
    err: false
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        logIn: (state, action: PayloadAction<IUser>) => {            
            
            const {payload} = action;
            
            const user = state.usersList.find( user => user.id?.includes( payload.name ) && user.password === payload.password );

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
        signIn: (state,action: PayloadAction<IUser>) => {
            
            const {payload} = action;

            const existingUser = state.usersList.find( user => user.userName === payload.userName  || user.email === payload.email );

            if (existingUser) 
                return {
                    ...state,
                    error: true
                }
                else {
                return {
                    ...state,
                    isLoggedIn: true,
                    usersList: [...state.usersList, payload],
                    currentUser: payload,
                    err: false
                }}

        }        
    }
});

export const {logIn, signIn} = usersSlice.actions;

export default usersSlice;
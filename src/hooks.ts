import { useEffect, useReducer } from "react";
import { useSelector, useDispatch, TypedUseSelectorHook} from "react-redux";
import { EActionType, IAction, IState, Product } from "./models/models";
import { RootState, AppDispatch } from "./store";

export const useAppDispatch : () => AppDispatch = useDispatch;

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export const usePagesReducer = (productList: Product[]) => {

    const initialState : IState = {
        start: 0,
        end: 3,
        currentPage: 1,
        totalPages: 0
    }

    const reducer = (state: IState, action: IAction) => {

        switch (action.type) {
            case EActionType.NEXT:
                return {
                    ...state,
                    start: state.end + 1,
                    end: state.end + 4,
                    currentPage: state.currentPage + 1                
                };
    
            case EActionType.PREV:
                return {
                    ...state,
                    end: state.end - 4,
                    start: state.start - 4,
                    currentPage: state.currentPage - 1
                };
            case EActionType.SET_TOTAL:
              return{
                ...state,
                totalPages: action.payload,
              }

            case EActionType.RESET: 
              return{
                start: 0,
                end: 3,
                currentPage: 1,
                totalPages: 0
              }
        
            default:
                return state;
        }
    
    }

    const [state, dispatch] = useReducer(reducer,initialState);    
    
    useEffect(()=>{                        

        dispatch({type: EActionType.RESET,payload:0})

        const totalPages = Math.round(productList.length / 4);

        dispatch({type: EActionType.SET_TOTAL, payload: totalPages})
  
      },[productList])

      const next = () => dispatch({type: EActionType.NEXT,payload:0});
      const prev = () => dispatch({type: EActionType.PREV,payload:0});      

      return {
        state, 
        next,
        prev
      }

}



// Use Typed Hooks in Components

// In component files, import the pre-typed hooks instead of the standard hooks from React-Redux.

// features/counter/Counter.tsx
// import React, { useState } from 'react'

// import { useAppSelector, useAppDispatch } from 'app/hooks'

// import { decrement, increment } from './counterSlice'

// export function Counter() {
//   // The `state` arg is correctly typed as `RootState` already
//   const count = useAppSelector((state) => state.counter.value)
//   const dispatch = useAppDispatch()

//   // omit rendering logic
// }
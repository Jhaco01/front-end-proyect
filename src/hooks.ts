import { useSelector, useDispatch, TypedUseSelectorHook} from "react-redux";
import { RootState, AppDispatch } from "./store";

export const useAppDispatch : () => AppDispatch = useDispatch;

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;



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
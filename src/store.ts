import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./state/counterSlice";

// Configurando a store do Redux
export const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})

type GetStateType = typeof store.getState
export type RootState = ReturnType<GetStateType>
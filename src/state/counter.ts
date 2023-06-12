import { createSlice,PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    value: number;
    clickPower:number;
}

const initialState: CounterState = {
    value: 0,
    clickPower:1
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += state.clickPower;
        },
        incrementClickPower: (state, action:PayloadAction<number>) => {
            state.clickPower *= action.payload;
        }
    },
})

export const { increment,incrementClickPower } = counterSlice.actions
export const counterReducer = counterSlice.reducer;
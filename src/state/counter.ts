import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  clickPower: number;
  upgrades: (string | number)[];
}

const initialState: CounterState = {
  value: 0,
  clickPower: 1,
  upgrades: []
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.clickPower;
    },
    reduce: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    incrementClickPower: (state, action: PayloadAction<number>) => {
      state.clickPower *= action.payload;
    },
    incrementUpgrades: (state, action: PayloadAction<string | number>) => {
      state.upgrades.push(action.payload);
    }
  },
})

export const { 
  increment,
  incrementClickPower,
  reduce,
  incrementUpgrades
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

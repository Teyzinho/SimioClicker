import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CounterState {
  value: number;
  clickPower: number;
  clickPerSecond: number;
  upgrades: (string | number)[];
  characters: {
    id: string;
    amount: number;
  }[];
}

const initialState: CounterState = {
  value: 0,
  clickPower: 1,
  clickPerSecond: 0,
  upgrades: [],
  characters: [],
};

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
    },
    incrementClickPerSecond: (state , action:PayloadAction<number>)=>{
      state.clickPerSecond += action.payload;
    },
    incrementCharacters: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const amount = 1;
      const existingCharacter = state.characters.find((character) => character.id === id);
      console.log(existingCharacter)
    
      if (existingCharacter) {
        existingCharacter.amount += 1;
      } else {
        state.characters.push({ id, amount });
      }
    }
  },
})

export const { 
  increment,
  incrementClickPower,
  reduce,
  incrementUpgrades,
  incrementClickPerSecond,
  incrementCharacters
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { characterData, CharacterInterface } from "../data/characters/charactersData"
interface CounterState {
  value: number;
  clickPower: number;
  addPerSecond: number;
  upgrades: (string | number)[];
  characters: CharacterInterface[];
}

const initialState: CounterState = {
  value: 0,
  clickPower: 1,
  addPerSecond: 0,
  upgrades: [],
  characters: characterData
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.clickPower;
    },
    addPerSecont:(state) => {
      state.value += state.addPerSecond
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
      state.addPerSecond += action.payload;
    },
    incrementCharacters: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const Character = state.characters.find((character) => character.id === id);
    
      if (Character) {
        Character.amount += 1;
        Character.cost += 2
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
  incrementCharacters,
  addPerSecont
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

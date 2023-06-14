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

const recalculateAddPerSecond = (state: CounterState) => {
  const addPerSecond = state.characters.reduce(
    (total, character) => total + character.productionAddition * character.amount,
    0
  );
  state.addPerSecond = addPerSecond;
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.clickPower;
    },
    addPerSecont: (state)=>{
      state.value += state.addPerSecond;
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
    incrementCharacters: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const character = state.characters.find((character) => character.id === id);
    
      if (character) {
        character.amount += 1;
        character.cost += 2;
        recalculateAddPerSecond(state);
      }
    },
  },
});

export const { 
  increment,
  incrementClickPower,
  reduce,
  incrementUpgrades,
  incrementCharacters,
  addPerSecont,
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

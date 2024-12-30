import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type {ExampleState} from '@features/example/types';

const exampleState: ExampleState = {
  counter: 0,
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState: exampleState,
  reducers: {
    setCounter: (state, action: PayloadAction<number>) => ({...state, counter: action.payload}),
  },
});

export const {setCounter} = exampleSlice.actions;

export default exampleSlice.reducer;

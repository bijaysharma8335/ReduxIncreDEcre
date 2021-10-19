import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    increBy: (state, action) => {
      state.value += action.payload;
    },
    decreBy:(state,action)=>{
      state.value -= action.payload;
    }
  },
});

export const { increment, decrement, increBy,decreBy } = slice.actions;


export const selectCount = state => state.counter.value;

export default slice.reducer;

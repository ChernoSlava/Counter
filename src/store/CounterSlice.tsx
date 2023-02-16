/* eslint-disable no-param-reassign */
import { CounterStateType } from '@types';
import { createSlice } from '@reduxjs/toolkit';

export const InitialState: CounterStateType = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: 'counter',
  initialState: InitialState,
  reducers: {
    increase: state => {
      state.value += Number(COUNTER_STEP);
    },
    decrease: state => {
      state.value -= Number(COUNTER_STEP);
    },
    reset: state => {
      state.value = 0;
    },
  },
});

export const { increase, decrease, reset } = CounterSlice.actions;

const { reducer: CounterSliceReducer } = CounterSlice;
export { CounterSliceReducer };

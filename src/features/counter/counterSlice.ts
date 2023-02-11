import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../app/store';

interface CounterState {
  value: number;
}

const initialCounterState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.value += 1;
    },
    decrement: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;

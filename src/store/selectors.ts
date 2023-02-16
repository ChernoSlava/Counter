import { CounterType } from '@components';
import { CounterStateType } from '@types';
import { createSelector } from '@reduxjs/toolkit';

const getState = (state: CounterStateType) => state;

export const getCounterContainerPropsSelector = createSelector(
  [getState],
  state => {
    let type: CounterType = 'lesszero';

    if (state.value === 0) {
      type = 'zero';
    } else if (state.value > 0) {
      type = 'abovezero';
    }

    return {
      value: state.value,
      type,
    };
  },
);

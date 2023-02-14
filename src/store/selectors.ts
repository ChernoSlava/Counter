import { CounterType } from '@components';
import { CounterStateType } from '@types';

export const getCounterContainerPropsSelector = (
  state: CounterStateType,
): {
  value: number;
  type: string;
} => {
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
};

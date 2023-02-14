import React from 'react';
import { useSelector } from 'react-redux';

import { Counter, CounterType } from '@components';
import { getCounterContainerPropsSelector } from '@store';

export const CounterContainer: React.FC = (): JSX.Element => {
  const { value, type } = useSelector(getCounterContainerPropsSelector);

  return <Counter title={String(value)} type={type as CounterType} />;
};

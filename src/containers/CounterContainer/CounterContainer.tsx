import React, { useContext } from 'react';

import { Counter, CounterType } from '@components';
import { CounterContext } from '@store';
import { observer } from 'mobx-react-lite';

export const CounterContainer: React.FC = observer ((): JSX.Element => {
  const { value, type } = useContext(CounterContext);

  return <Counter title={String(value)} type={type as CounterType} />;
});

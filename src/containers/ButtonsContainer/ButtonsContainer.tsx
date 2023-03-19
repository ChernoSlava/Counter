import React, { useContext } from 'react';

import { Button } from '@components';
import { CounterContext } from '@store';
import { observer } from 'mobx-react-lite';

export const ButtonsContainer: React.FC = observer ((): JSX.Element => {
  const counter = useContext(CounterContext);

  return (
    <>
      <Button
        title="Уменьшить"
        type="decrease"
        onClick={() => counter.decrease()}
      />
      <Button title="Сбросить" type="reset" onClick={() => counter.reset()} />
      <Button
        title="Увеличить"
        type="increase"
        onClick={() => counter.increase()}
      />
    </>
  );
});

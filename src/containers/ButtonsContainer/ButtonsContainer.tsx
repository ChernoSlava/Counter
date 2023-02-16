import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@components';
import { increase, decrease, reset } from '@store';

export const ButtonsContainer: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        title="Уменьшить"
        type="decrease"
        onClick={() => dispatch(decrease())}
      />
      <Button title="Сбросить" type="reset" onClick={() => dispatch(reset())} />
      <Button
        title="Увеличить"
        type="increase"
        onClick={() => dispatch(increase())}
      />
    </>
  );
};

import React from 'react';
import { CounterStyled, CounterType } from './styled';

export type CounterProps = {
  title: string;
  type: CounterType;
};

export const Counter: React.FC<CounterProps> = ({
  title,
  type,
}): JSX.Element => {
  return <CounterStyled type={type}>{title}</CounterStyled>;
};

import React from 'react';
import { ButtonStyled, ButtonType } from './styled';

export type ButtonProps = {
  title?: string;
  type: ButtonType;
  onClick?: () => void;
  isDisabled?: boolean;
};
export const Button: React.FC<ButtonProps> = ({
  title,
  type,
  isDisabled,
  onClick,
}): JSX.Element => {
  return (
    <ButtonStyled disabled={isDisabled} renderType={type} onClick={onClick}>
      {title}
    </ButtonStyled>
  );
};

import React from "react";
import styles from './Counter.css';
import { CounterStyled, CounterType,  } from "./styled";

export const Counter: React.FC<{
    title: string;
    type: CounterType;
}>  = ({ title, type }): JSX.Element => {
    return (
        <CounterStyled type={type}>{title}</CounterStyled>
    )
}

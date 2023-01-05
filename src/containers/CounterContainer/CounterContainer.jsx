import React, { useContext } from "react";
import { Counter } from "@components"
import { CounterContext } from "../../contexts";

export const CounterContainer = () => {
    const {state} = useContext(CounterContext);
    let type = 'lesszero';

    if ( state.counterValue === 0 ) {
        type = 'zero';
    } else if ( state.counterValue > 0 ) {
        type = 'abovezero';
    }

    return (
        <Counter title={state.counterValue} type={type}/>
    )
}
import React, { useContext } from "react";
import { Button } from "@components"
import { CounterContext } from "../../contexts";

export const ButtonsContainer = () => {
    const {dispatch} = useContext(CounterContext);

    return (
        <>
            <Button title="Уменьшить" type='decrease' onClick={() => dispatch({ type: "DECREASE" })}/>
            <Button title="Сбросить" type='reset' onClick={() => dispatch({ type: "RESET" })}/>
            <Button title="Увеличить" type='increase' onClick={() => dispatch({ type: "INCREASE" })} />
        </>
        
    )
}
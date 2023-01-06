import React, { useReducer } from "react";
import { CounterContainer, ButtonsContainer } from "@containers";
import { CounterContext } from '@contexts';
import styles from './App.css';

  const CounterReducer = (state, action) => {
    const { type } = action;

    switch (type) {
        case 'INCREASE': {
            return {
                ...state,
                value: state.value + 1
            };
        }
        case 'DECREASE': {
            return {
                ...state,
                value: state.value - 1
            };
        }
        case 'RESET': {
            return {
                ...state,
                value: 0
            };
        }

        default: {
            return state;
        }
    }
}

const InitialCounter = {
    value: 0
}
export const App = () => {
    const [state, dispatch ] = useReducer(CounterReducer, InitialCounter);
  
    return(
        <CounterContext.Provider value={{
                state: {
                    counterValue: state.value
                },
                dispatch
            }}>
        <div className={styles.App}>
            <CounterContainer />
            <div className={styles.App__buttons}>
                <ButtonsContainer />
            </div>
        </div>
        </CounterContext.Provider>
        
    )
}
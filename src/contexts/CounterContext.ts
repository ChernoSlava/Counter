import React from "react";
import { CounterContextType } from '@types';

export const CounterContextInitialValue: CounterContextType = {
    state: {
        counterValue: 0
    },
    dispatch: () => {},
}
export const CounterContext = React.createContext(CounterContextInitialValue);
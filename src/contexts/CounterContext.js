import React from "react";

export const CounterContextInitialValue = {
    state: {
        counterValue: 0
    },
    dispatch: () => {},
}
export const CounterContext = React.createContext(CounterContextInitialValue);
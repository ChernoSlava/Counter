import { CounterStateType, Action, ActionKind } from '@types';

export const CounterReducer = (
    state: CounterStateType = InitialState, 
    action: Action
    ): CounterStateType => {
        
    const { type } = action;

    switch (type) {
        case ActionKind.Increase: {
            return {
                ...state,
                value: state.value + 1
            };
        }
        case ActionKind.Decrease: {
            return {
                ...state,
                value: state.value - 1
            };
        }
        case ActionKind.Reset: {
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

export const InitialState: CounterStateType = {
    value: 0
}
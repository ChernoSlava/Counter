import { CounterContainer } from "../CounterContainer";
import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Store, AnyAction } from '@reduxjs/toolkit';

import { theme } from '../../../theme';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { InitialCounter } from "@store";

const mockStore = configureStore();

const getUI = (store: Store<any, AnyAction>): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    </ThemeProvider>
  );
};

describe('CounterContainer test', () => {
  it('should render zero', () => {
    const { container } = render(getUI(mockStore({
      ...InitialCounter,
    }),
    ))
    expect(container).toMatchSnapshot();
  });

  it('should render lesszero', () => {
    const { container } = render(getUI(mockStore({
      ...InitialCounter,
      value: -1,
    }),
    ))
    expect(container).toMatchSnapshot();
  });

  it('should render abovezero', () => {
    const { container } = render(getUI(mockStore({
      ...InitialCounter,
      value: 4,
    }),
    ))
    expect(container).toMatchSnapshot();
  });
})

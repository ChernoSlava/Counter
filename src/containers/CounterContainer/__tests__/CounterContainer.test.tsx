import { CounterContainer } from "../CounterContainer";
import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@theme';
import { CounterContext, CounterStore } from "@store";

const getUI = (store: CounterStore): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CounterContext.Provider value={store}>
        <CounterContainer />
      </CounterContext.Provider>
    </ThemeProvider>
  );
};

describe('CounterContainer test', () => {
  it('should render zero', () => {
    const { container } = render(getUI(new CounterStore()));

    expect(container).toMatchSnapshot();
  });

  it('should render lesszero', () => {
    const { container } = render(getUI(new CounterStore(-1)));

    expect(container).toMatchSnapshot();
  });

  it('should render abovezero', () => {
    const { container } = render(getUI(new CounterStore(4)));

    expect(container).toMatchSnapshot();
  });
})

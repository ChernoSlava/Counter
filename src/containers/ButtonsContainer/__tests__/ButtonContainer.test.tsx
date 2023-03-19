import { ButtonsContainer } from "../ButtonsContainer";
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@theme';
import { CounterContext, CounterStore } from "@store";

const getUI = (store: CounterStore): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CounterContext.Provider value={store}>
        <ButtonsContainer />
        </CounterContext.Provider>
    </ThemeProvider>
  );
};

describe('ButtonContainer test', () => {
  it('should render', () => {
    const { container } = render(getUI(new CounterStore()));

    expect(container).toMatchSnapshot();
  });

  it('should call decrease action', () => {
    const store = new CounterStore();
    store.decrease = jest.fn();

    const { getByText } = render(getUI(store));

    const button = getByText('Уменьшить');

    fireEvent.click(button);

    expect(store.decrease).toBeCalled();
    expect(store.decrease).toBeCalledTimes(1);
  });

  it('should call increase action', () => {
    const store = new CounterStore();
    store.increase = jest.fn();

    const { getByText } = render(getUI(store));

    const button = getByText('Увеличить');

    fireEvent.click(button);

    expect(store.increase).toBeCalled();
    expect(store.increase).toBeCalledTimes(1);
  });

  it('should call reset action', () => {
    const store = new CounterStore();
    store.reset = jest.fn();


    const { getByText } = render(getUI(store));

    const button = getByText('Сбросить');

    fireEvent.click(button);

    expect(store.reset).toBeCalled();
    expect(store.reset).toBeCalledTimes(1);
  });
})

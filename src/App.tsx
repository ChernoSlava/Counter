import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@theme';
import { CounterContainer, ButtonsContainer } from '@containers';
import { CounterContext, CounterStore } from '@store';
import { GlobalStyles } from './styles/GlobalStyles';
import { AppButtons, AppStyled } from './styled';



export const App = () => {
  return (
    <>
      <GlobalStyles />
      <CounterContext.Provider value={new CounterStore()}>
        <ThemeProvider theme={theme}>
          <AppStyled>
            <CounterContainer />
            <AppButtons>
              <ButtonsContainer />
            </AppButtons>
          </AppStyled>
        </ThemeProvider>
      </CounterContext.Provider>
    </>
  );
};

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme';
import { Counter, CounterProps } from '../Counter';

const getUI: React.FC<CounterProps> = (props?: CounterProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Counter title="0" type="zero" {...(props || {})} />
    </ThemeProvider>
  );
};

describe('Counter tests', () => {
  it('should render correct counter type zero', () => {
    const { container } = render(
      getUI({
        title: '0',
        type: 'zero',
      }),
    );

    expect(container).toMatchSnapshot();
  });
  it('should render correct counter type lesszero', () => {
    const { container } = render(
      getUI({
        title: '-2',
        type: 'lesszero',
      }),
    );

    expect(container).toMatchSnapshot();
  });
  it('should render correct counter type abovezero', () => {
    const { container } = render(
      getUI({
        title: '5',
        type: 'abovezero',
      }),
    );

    expect(container).toMatchSnapshot();
  });
});

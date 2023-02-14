import styled from 'styled-components';

export type CounterType = 'zero' | 'lesszero' | 'abovezero';

export const CounterStyled = styled.div<{
  type: CounterType;
}>`
  font-size: 24px;
  color: black;
  font-weight: bold;
  ${props =>
    props.type === 'abovezero' &&
    `
        color: green;
    `}
  ${props =>
    props.type === 'lesszero' &&
    `
        color: red;
    `}
    ${props =>
    props.type === 'zero' &&
    `
        color: black;
    `}
`;
// .Counter {
//     font-size: 24px;
//     color: black;
//     font-weight: bold;
// }

// .Counter_zero {

//     color: black;

// }

// .Counter_lesszero {
//     color: red;
// }

// .Counter_abovezero {
//     color: green;
// }

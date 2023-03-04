import { CounterSliceReducer, InitialState, reset, increase, decrease } from "../CounterSlice";

describe('Counter slice tests', () => {
  describe('increment tests', () => {
    it('should add 1', () => {
      expect(CounterSliceReducer(InitialState, increase())).toEqual({
        value: 1,
      })
    })
  })
  describe('decrement tests', () => {
    it('should add -1', () => {
      expect(CounterSliceReducer(InitialState, decrease())).toEqual({
        value: -1,
      })
    })
  })
  describe('reset tests', () => {
    it('should add 0', () => {
      expect(CounterSliceReducer({
        value: 2
      }, reset())).toEqual({
        value: 0,
      })
    })
  })
})
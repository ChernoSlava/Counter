import { getCounterContainerPropsSelector } from "../selectors"

describe('selectors test', () => {
  describe('getContainerPropSelector tests', () => {
    it('should return lesszero type', () => {
      expect(getCounterContainerPropsSelector({
        value: -1
      })).toEqual({
        value: -1,
        type: 'lesszero',
      });

      expect(getCounterContainerPropsSelector({
        value: -5
      })).toEqual({
        value: -5,
        type: 'lesszero',
      });
    });

    it('should return above type', () => {
      expect(getCounterContainerPropsSelector({
        value: 1
      })).toEqual({
        value: 1,
        type: 'abovezero',
      });

      expect(getCounterContainerPropsSelector({
        value: 5
      })).toEqual({
        value: 5,
        type: 'abovezero',
      });
    });

    it('should return zero type', () => {
      expect(getCounterContainerPropsSelector({
        value: 0
      })).toEqual({
        value: 0,
        type: 'zero',
      });

    });
  })
})
import { CounterStore } from ".."

describe('store tests', () => {
  describe('increment tests', () => {
    it('should add 1', () => {
      const store = new CounterStore();
      store.increase()

      expect(store.value).toEqual(1)
    });
  });

  describe('decrement tests', () => {
    it('should add -1', () => {
      const store = new CounterStore();
      store.decrease()

      expect(store.value).toEqual(-1)
    });
  });

  describe('reset tests', () => {
    it('should add 0', () => {
      const store = new CounterStore(2);

      expect(store.value).toEqual(2)

      store.reset()

      expect(store.value).toEqual(0)
    });
  });
})
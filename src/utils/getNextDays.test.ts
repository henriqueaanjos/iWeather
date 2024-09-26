import { getNextDays } from "./getNextDays"

describe('Utils: GetNextDays', () => {
  it('should return the next five days', () => {
    const days = getNextDays();
    expect(days).toHaveLength(5);

  })
})
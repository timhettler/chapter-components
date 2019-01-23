import { track } from '../';

test('track() with no mocks', () => {
  expect(track('FOO_{id}', 1)).toBe(undefined);
});

import './window.track.mock';
import { track } from '../';

test('track()', () => {
  expect(track('FOO_{id}', 1)).toBe('FOO_1');
  expect(track('FOO_{id}')).toBe('FOO_');
});

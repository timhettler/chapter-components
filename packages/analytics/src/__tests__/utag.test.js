import './window.utag.mock';
import { track } from '../';

const data = {
  'data-link_id': 'FOO_{id}',
  'data-link_meta': 'BAR_{id}',
};

test('track() with utag', () => {
  expect(track(data, 1)).toEqual({
    'data-link_id': 'FOO_1',
    'data-link_meta': 'BAR_1',
  });
});

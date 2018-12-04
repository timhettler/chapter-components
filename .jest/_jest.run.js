const jest = require('jest');

function addMatchingKeys(arr, keys = []) {
  return arr.reduce((a, v) => (keys.includes(v) ? a + v : a), '');
}

const JEST_KEYS = ['--watch', '-u'];

jest.run(
  `--c ../../jest.config.js ${addMatchingKeys(process.argv, JEST_KEYS)
    .split('--')
    .join(' --')}`
);

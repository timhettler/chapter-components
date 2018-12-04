const pluckPackageName = () => {
  const FLAG = '--root';
  const rootIndex = process.argv.indexOf(FLAG);
  return rootIndex > -1 && process.argv[rootIndex + 1];
};

const PACKAGE_NAME = pluckPackageName();

const ERROR_MSG = `
  You must use jest.run.js & must have --root PACKAGE_NAME flag appended, e.g.
  "test": "node ../../jest.run.js --root example-package"
`;

if (!PACKAGE_NAME) {
  throw new Error(ERROR_MSG);
}

module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  roots: [`packages/${PACKAGE_NAME}/src/__tests__`],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};

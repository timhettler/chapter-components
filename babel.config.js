module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  env: {
    test: {
      presets: [['@babel/preset-env'], '@babel/preset-react'],
    },
  },
};

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
  env: {
    test: {
      plugins: [['@babel/plugin-transform-runtime', { useESModules: false }]],
    },
  },
};

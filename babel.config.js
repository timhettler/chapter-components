const config = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};

if (process.env['NODE_ENV'] === 'production') {
  config.presets[0] = [
    '@babel/preset-env',
    {
      modules: false,
    },
  ];

  config.plugins = ['@babel/plugin-transform-runtime'];
}

module.exports = config;

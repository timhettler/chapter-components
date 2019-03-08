const config = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};

if (process.env['NODE_ENV'] === 'production') {
  config.presets[config.presets.indexOf('@babel/preset-env')] = [
    '@babel/preset-env',
    {
      modules: false,
    },
  ];

  config.plugins = ['@babel/plugin-transform-runtime'];
}

module.exports = config;

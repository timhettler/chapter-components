const path = require('path');

module.exports = {
  mode: 'development',
  bail: true,
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  externals: ['react'],
  module: {
    strictExportPresence: true,
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /(node_modules)/,
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
      },
      {
        oneOf: [
          // Process JS with Babel.
          {
            test: /\.js$/,
            loader: require.resolve('babel-loader'),
            exclude: /(node_modules)/,
            options: {
              rootMode: 'upward',
              compact: true,
            },
          },
          // Process Sass
          {
            test: /\.scss$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  modules: true,
                  sourceMap: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
              },
              require.resolve('postcss-loader'),
              require.resolve('sass-loader'),
            ],
          },
        ],
      },
    ],
  },
};

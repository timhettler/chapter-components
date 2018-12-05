const path = require('path');

module.exports = {
  mode: 'production',
  bail: true,
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'umd',
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.js$/,
        enforce: 'pre',
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

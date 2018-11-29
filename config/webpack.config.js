module.exports = {
  mode: 'production',
  bail: true,
  devtool: 'source-map',
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
          // "url" loader works just like "file" loader but it also embeds
          // assets smaller than specified size as data URLs to avoid requests.
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
            use: [
              {
                loader: require.resolve('url-loader'),
                options: {
                  limit: 10000,
                  name: 'static/media/[name].[hash:8].[ext]',
                },
              },
              require.resolve('image-webpack-loader'),
            ],
          },
          // Process JS with Babel.
          {
            test: /\.js$/,
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
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
              require.resolve('sass-loader'),
            ],
          },
          {
            // Exclude `js` files to keep "css" loader working as it injects
            // it's runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [
              /\.html$/,
              /\.js$/,
              /\.css$/,
              /\.scss$/,
              /\.json$/,
              /\.bmp$/,
              /\.gif$/,
              /\.jpe?g$/,
              /\.png$/,
            ],
            use: [
              {
                loader: require.resolve('file-loader'),
                options: {
                  name: 'static/media/[name].[hash:8].[ext]',
                },
              },
              require.resolve('image-webpack-loader'),
            ],
          },
        ],
      },
    ],
  },
};

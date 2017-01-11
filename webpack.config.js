const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');

const config = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : false,
  entry: {
    scripts: './src/js/scripts.js',
    styleguide: './src/js/styleguide.js',
  },
  output: {
    path: __dirname + '/dist/js',
    filename: '[name].js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  eslint: {
    formatter: eslintFriendlyFormatter,
  },
};

module.exports = config;

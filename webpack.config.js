const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(png|jpg|)$/,
      loader: 'url?limit=25000',
    },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    historyApiFallback: true,
    inline: true,
    open: true,
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;

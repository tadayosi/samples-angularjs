const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/app.ts',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'ts-loader',
        include: [
          path.resolve(__dirname, 'app')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.tsx', '.ts', '.js', '.jsx', '.css', '.less']
  },
  devtool: 'source-map'
};

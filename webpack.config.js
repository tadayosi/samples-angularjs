const path = require('path');

module.exports = {
  entry: './app/app.ts',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.tsx?$/,
      loader: 'ts-loader',
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.tsx', '.ts', '.js', '.jsx', '.css']
  },
  devtool: 'inline-source-map'
};

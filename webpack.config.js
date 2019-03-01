const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        'from': path.resolve(__dirname, 'src/index.html'),
        'to': path.resolve(__dirname, 'public/index.html'),
      },
      {
        'from': path.resolve(__dirname, 'src/index.css'),
        'to': path.resolve(__dirname, 'public/app.css'),
      },
    ]),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    port: 3000,
    open: true,
  },
}

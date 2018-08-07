const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: './src', /** /index.js default */
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
        exclude: '/node_modules/',
        include: __dirname + '/src'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { 
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[name]_[local]_[hash:base64:5]",
              minimize: true,
              importLoaders: 1
            }
          },
        ],
      }
    ]
  },
  plugins: [htmlPlugin]
};
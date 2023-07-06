const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = {
  context: __dirname,
  devtool: "source-map",
  entry: "./src/js/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  module:{
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: '/node_modules/',
        use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    port: 3000
  },
}
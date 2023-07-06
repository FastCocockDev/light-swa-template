const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      template: 'src/index.html'
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
    inline: true,
    port: 3000
  },
}
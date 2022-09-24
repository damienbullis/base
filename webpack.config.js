const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist/"),
    publicPath: "/dist/",
  },
  resolve: { extensions: [".tsx", ".ts", ".js", ".jsx"] },
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx|ts?$/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

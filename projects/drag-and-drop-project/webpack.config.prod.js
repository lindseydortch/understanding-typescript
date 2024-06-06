const path = require("path");
const { CleanPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/"
  },
  devtool: "none",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname)
      }
    ]
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()]
};

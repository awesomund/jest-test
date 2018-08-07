const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./react-app/app.jsx",
  output: {
    publicPath: "/",
    //filename: "[name].[hash:8].js"
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "env",
              "react"
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './react-app/static' }
    ])
  ]
};

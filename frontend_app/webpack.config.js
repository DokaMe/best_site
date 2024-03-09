const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
    assetModuleFilename: path.join('static', '[name][contenthash][ext]')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: 'css-loader'
      },
      {
        test: /\.(?:jpg|jpeg|png|gif|)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(eot|ttf|otf|svg|)$/i,
        type: 'asset/inline'
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};
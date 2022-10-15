const path = require('path');
const MiniExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log('STARTING WEBPACK!!!!');

module.exports = {
  entry: ['./src/data.js', './src/yolo.ts'],
  devtool: 'inline-source-map',
  mode: 'development',

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  
  output: [{
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },

  {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ts-bundle.js',
  },
],

  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: "[id].css",
    })
  ],

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.css$/i,
        use: [MiniExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  }
}  
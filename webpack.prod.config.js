'use strict';
const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DtsBundlerPlugin = require('dtsbundler-webpack-plugin');

module.exports = {
  entry: {
    'zaojiu-player': path.resolve(__dirname, './src/index.ts'),
    'zaojiu-player-flash.plugin': path.resolve(__dirname, './src/flash.ts')
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, './dist')
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",


  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".js", ".json", ".scss"]
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader",
          options: {
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }, {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            plugins: [
              require('autoprefixer')(),
              require('cssnano')()
            ]
          }
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },

      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      mangle: true,
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new CopyWebpackPlugin([
      {from: path.resolve(__dirname, './src/video-js.swf'), to: path.resolve(__dirname, './dist/video-js.swf')}
    ]),
    new DtsBundlerPlugin({
      out:'types/index.d.ts'
    })
  ]
};

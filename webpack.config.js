var path = require("path")
var webpack = require("webpack")

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var autoprefixer = require("autoprefixer")
var precss = require("precss")

module.exports = {
  entry: {
    demo: "./src/demo/demo.jsx"
  },
  cache: true,
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "./demo/"),
    filename: "raidemo.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: "postcss-loader",
              options: {
                plugins: loader => [autoprefixer({browsers: ["last 2 versions"]})]
              }
            }
          ]
        })
      },
      {
        test: /\.(js|jsx)/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          plugins: ["babel-plugin-transform-decorators-legacy"],
          presets: [
            "babel-preset-es2015",
            "babel-preset-stage-0",
            "babel-preset-react"
          ]
        }
      }
    ]
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new ExtractTextPlugin('activityindicator.css'),
    new UglifyJSPlugin({
      minimize: true,
      compress: {
        warnings: false
      },
      output: {comments: false}
    })
  ]
}

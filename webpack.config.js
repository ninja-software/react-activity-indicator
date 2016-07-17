var path = require('path');
var webpack = require('webpack');

var CompressionPlugin = require("compression-webpack-plugin");

var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
  entry: {
      demo: './src/demo/demo.jsx',
  },
  cache: true,
  devtool: 'source-map',
  debug: true,
  output: { 
    path: './build/', 
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json" },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['babel-plugin-transform-decorators-legacy'].map(require.resolve),
          presets: ['babel-preset-es2015', 'babel-preset-stage-0', 'babel-preset-react'].map(require.resolve)
        }
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  resolve: {
    "react": __dirname + '/node_modules/react',
    "react/addons": __dirname + '/node_modules/react/addons',
    "immutable": __dirname + '/node_modules/immutable',
    "superagent": __dirname + '/node_modules/superagent',
    "codemirror": __dirname + '/node_modules/codemirror',
    "babel-preset-stage-2": __dirname + '/node_modules/babel-preset-stage-2',
    "babel-preset-stage-0": __dirname + '/node_modules/babel-preset-stage-0',
    "babel-preset-es2015": __dirname + '/node_modules/babel-preset-es2015',
    "babel-preset-react": __dirname + '/node_modules/babel-preset-react',
    extensions: [ '', '.js', '.jsx' ],
    fallback: path.join(__dirname, "node_modules"),
    alias: {
      'ie': 'component-ie',
      "react": __dirname + '/node_modules/react',
      "react/addons": __dirname + '/node_modules/react/addons',
      "immutable": __dirname + '/node_modules/immutable',
      "superagent": __dirname + '/node_modules/superagent',
      "codemirror": __dirname + '/node_modules/codemirror'
    }
  },
  resolveLoader: {
      root: path.join(__dirname, "node_modules"),
      alias: {
          'copy': 'file-loader?name=[path][name].[ext]&context=./src',
      }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      },
      output: {comments: false}
    })
    // new CompressionPlugin({
    //         asset: "[path].gz[query]",
    //         algorithm: "gzip",
    //         threshold: 10240,
    //         minRatio: 0.8
    //     })
  ]
};

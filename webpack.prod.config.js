const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

// currently, this is for bower
var config = {
  devtool: "sourcemap",
  entry: {
    index: "./src/activityindicator.jsx"
  },
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "build/",
    filename: "react-activity-indicator.js",
    sourceMapFilename: "react-activity-indicator.map",
    library: "ActivityIndicator",
    libraryTarget: "umd"
  },
  module: {
    rules: [
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
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "postcss-loader",
              options: {
                plugins: loader => [
                  autoprefixer({browsers: ["last 2 versions"]})
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('activityindicator.css'),
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    }
  }
}

module.exports = config

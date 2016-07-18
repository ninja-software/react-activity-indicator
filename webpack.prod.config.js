var path = require('path');

// currently, this is for bower
var config = {
  devtool: 'sourcemap',
  entry: {
    index: './src/activityindicator.jsx',
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'build/',
    filename: 'react-activity-indicator.js',
    sourceMapFilename: 'react-activity-indicator.map',
    library: 'ActivityIndicator',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        plugins: ['babel-plugin-transform-decorators-legacy'].map(require.resolve),
        presets: ['babel-preset-es2015', 'babel-preset-stage-0', 'babel-preset-react'].map(require.resolve)
      }
    }],
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
};

module.exports = config;
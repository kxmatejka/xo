const webpack = require('webpack')
const path = require('path')

const DEV_PORT = 3001

module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${DEV_PORT}`,
    'webpack/hot/only-dev-server',
    './src/bootstrap'
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  modules: false
                }
              ],
              'react'
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: DEV_PORT,
    historyApiFallback: true,
    hot: true,
    open: true
  },
  output: {
    publicPath: `http://localhost:${DEV_PORT}/`,
    filename: 'client.bundle.js'
  }
}

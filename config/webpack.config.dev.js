const path = require('path')
const webpack = require('webpack')

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
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: `/`
  },
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
            ],
            plugins: [
              'react-hot-loader/babel'
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
    hot: true
  }
}

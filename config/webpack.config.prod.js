const path = require('path')

const config = {
  mode: 'production',
  target: null,
  entry: null,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      }
    ]
  }
}

const client = {
  target: 'web', 
  entry: {
    client: './src/bootstrap'
  }
}

const server = {
  target: 'node',
  entry: {
    server: './src/app/index'
  }
}

module.exports = [
  Object.assign({}, config, client),
  Object.assign({}, config, server)
]

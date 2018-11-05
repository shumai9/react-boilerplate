let path = require('path');
let nodeExternals = require('webpack-node-externals');

const moduleObj = {
  loader: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"],
    }
  ],
};



const client = {
  entry: {
    'client' : './src/client/index.js'
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/public')
  },
  module: moduleObj
};


const server = {
  entry: {
    'server' : './src/server/index.js',
    target: 'node',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    }
  },
  module: moduleObj
};

module.exports = [client, server];
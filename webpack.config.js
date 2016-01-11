var path = require('path');
module.exports = {
  entry: path.join(__dirname, 'src', 'entry.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js(x)?$/,
      loader: 'babel'
    }, {
      test: /.css$/,
      loader: 'style-loader!css-loader'
    },{
      test   : /\.(json|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader : 'file-loader',
      query:{
        name:'[name]-[md5:hash:8].[ext]'
      }
    }]
  }
}
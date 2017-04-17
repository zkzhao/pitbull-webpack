module.exports= {
  entry: require('./config/entry.config.js'),

  output: require('./config/output.config.js'),

  module: require('./config/module.prod.config.js'),

  plugins: require('./config/plugins.prod.config.js'),

  resolve: require('./config/resolve.config.js'),
}
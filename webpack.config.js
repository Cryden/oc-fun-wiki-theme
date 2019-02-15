const path = require('path');

module.exports = {
  entry: './source/index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'assets')
  }
};
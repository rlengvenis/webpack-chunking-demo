const path = require('path');

module.exports = {
  mode: 'development',
  devtool: "source-map",

  // SplitChunksPlugin
  optimization: {
    splitChunks: {
      name: false,
      minSize: 0,
      cacheGroups: Object.assign({
        packages: {
          name: "packages",
          test: module => module.context && module.context.includes("smallest"),
          chunks: "initial"
        },
        default: {
          name: "main",
        }
      })
    }
  },

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

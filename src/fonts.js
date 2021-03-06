const urlLoader = require.resolve('url-loader');
const fileLoader = require.resolve('file-loader');

export default {
  module: {
    rules: [
      {
        test: /\.woff(2)?$/i,
        loader: `${urlLoader}?limit=10000&mimetype=application/font-woff`,
      },
      {
        test: /\.(ttf|eot)$/i,
        loader: fileLoader,
      },
    ],
  },
};

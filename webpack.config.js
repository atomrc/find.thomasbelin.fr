module.exports = {
  entry: './src/js/application.ts',
  output: { path: __dirname + '/dist/js', filename: 'application.js' },
  module: {
    loaders: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  }
};

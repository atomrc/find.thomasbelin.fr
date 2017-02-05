const ExtractTextPluging = require("extract-text-webpack-plugin");
const extractCss = new ExtractTextPluging("css/application.css");

module.exports = {
  entry: './src/js/application.ts',
  output: { path: __dirname + '/dist', filename: 'js/application.js' },
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
      },
      {
        test: /\.scss$/,
        loader: extractCss.extract(["css-loader", "sass-loader"])
      },
      {
        test: /\.png$/,
        loader: "url-loader"
      }
    ]
  },

  plugins: [ extractCss ]
};

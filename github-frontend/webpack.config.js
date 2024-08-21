const path = require('path');

module.exports = {
  // Outras configurações do Webpack...

  resolve: {
    fallback: {
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "stream": require.resolve("stream-browserify"),
      "assert": require.resolve("assert/"),
      "querystring": require.resolve("querystring-es3"),
      "zlib": require.resolve("browserify-zlib"),
      "path": require.resolve("path-browserify"),
    },
  },

  // Outras configurações do Webpack...
//   resolve: {
//     fallback: {
//       "util": false,
//       "url": false,
//       "http": false,
//       "https": false,
//       "stream": false,
//       "assert": false,
//       "querystring": false,
//       "zlib": false,
//       "path": false
//     },
//   }
  
};

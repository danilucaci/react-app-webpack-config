const path = require("path");

const PATH_DIST = path.resolve("./dist");

module.exports = () => ({
  // The dev server will serve content from this directory.
  contentBase: PATH_DIST,

  // HMR
  hot: true,

  // Specify a host. (Defaults to 'localhost'.)
  host: "localhost",

  // Specify a port number on which to listen for requests.
  port: 8080,

  // When using the HTML5 History API (you'll probably do this with React
  // later), index.html should be served in place of 404 responses.
  historyApiFallback: true,

  // Show a full-screen overlay in the browser when there are compiler
  // errors or warnings.
  overlay: {
    errors: true,
    warnings: true,
  },
});

const DashboardPlugin = require("webpack-dashboard/plugin");
const path = require("path");

const PATH_SOURCE = path.resolve("./src");
const PATH_DIST = path.resolve("./dist");
const devServer = require("./devServer");

module.exports = (mode = "development") => {
  return {
    mode: mode,
    entry: {
      main: path.join(PATH_SOURCE, "./index.js"),
    },
    output: {
      path: PATH_DIST,
      filename: "js/[name].js",
      chunkFilename: "js/[name].bundle.js",
    },
    devtool: "cheap-module-eval-source-map",
    devServer: devServer(),
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          include: PATH_SOURCE,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ],
    },
    plugins: [new DashboardPlugin()],
  };
};

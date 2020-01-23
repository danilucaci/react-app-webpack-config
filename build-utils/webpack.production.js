const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const path = require("path");
const glob = require("glob");

const PATH_SOURCE = path.resolve("./src");
const PATH_DIST = path.resolve("./dist");

module.exports = (mode = "production") => {
  return {
    mode: mode,
    entry: {
      main: path.join(PATH_SOURCE, "./index.js"),
    },
    output: {
      path: PATH_DIST,
      filename: "js/[name].[hash].js",
      chunkFilename: "js/[name].[hash].bundle.js",
    },
    devtool: "source-map",
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.css$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[id].[contenthash].css",
      }),

      // Your scripts and view files will be scanned for classes,
      // and those that are unused will be stripped off your CSS - aka. "purified".
      // It's essential the PurgecssPlugin plugin is used after the MiniCssExtractPlugin;
      // otherwise, it doesn't work.
      new PurgecssPlugin({
        paths: glob.sync(`${PATH_SOURCE}/**/*`, { nodir: true }),
      }),
    ],
  };
};

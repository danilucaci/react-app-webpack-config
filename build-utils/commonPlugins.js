const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => ({
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: require("html-webpack-template"),
      appMountId: "root",
      mobile: true,
      lang: "en-US",
      title: "Webpack React App Babel Starter",
      meta: [
        {
          name:
            "A React starter kit made with Webpack and Babel made by @danilucaci.",
        },
      ],
    }),
  ],
});

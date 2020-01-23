const path = require("path");
const PATH_SOURCE = path.resolve("./src");

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: PATH_SOURCE,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/env",
                  {
                    // Output the targets/plugins used when compiling
                    // debug: true,

                    // Configure how @babel/preset-env handles polyfills from core-js.
                    // https://babeljs.io/docs/en/babel-preset-env
                    useBuiltIns: "usage",

                    // Specify the core-js version. Must match the version in package.json.
                    corejs: 3,

                    // Needed for tree shaking to work.
                    modules: false,
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        },
      ],
    },
  };
};

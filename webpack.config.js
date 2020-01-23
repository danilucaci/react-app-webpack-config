const webpackMerge = require("webpack-merge");

const loadPresets = require("./build-utils/loadPresets");
const commonBabelConfig = require("./build-utils/commonBabelConfig");
const commonPlugins = require("./build-utils/commonPlugins");

function modeConfig(env = "production") {
  return require(`./build-utils/webpack.${env}`)(env);
}

module.exports = ({ mode, presets } = { mode: "development", presets: [] }) => {
  return webpackMerge(
    {
      mode: mode,
      ...commonBabelConfig(),
      ...commonPlugins(),
      optimization: {
        splitChunks: {
          // Providing all can be particularly powerful,
          // because it means that chunks can be shared
          // even between async and non-async chunks.
          chunks: "all",
        },
      },
    },
    modeConfig(mode),
    loadPresets({ mode, presets }),
  );
};

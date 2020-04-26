const path = require('path');
const resolveTsconfigPathsToAlias = require("./resolve-tsconfig-path-to-webpack-alias")

module.exports = {
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...resolveTsconfigPathsToAlias()
    };

    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          options.defaultLoaders.babel,
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [
                  { removeTitle: false }
                ],
                floatPrecision: 2
              }
            }
          }
        ]
      }
    );

    return config;
  }
}
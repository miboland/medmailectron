module.exports = {
  webpack: (config) =>
    Object.assign(
      config,
      {
        target: "electron-renderer",
      },
      config.module.rules.push({
        test: /\.txt$/,
        loader: "raw-loader",
      })
    ),
};

const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const glob = require("glob");

module.exports = {
  entry: {
    "bundle.js": [
      ...glob.sync("build/static/?(js|css)/main.*.?(js|css)").map(f => path.resolve(__dirname, f))
    ],
  },
  output: {
    filename: "build/static/js/bundle.min.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
        ],
      },

      {
        test: /\.(png|jpg|gif|svg)$/i,
        include: path.resolve(__dirname, "media"),
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

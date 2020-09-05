const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: {
    "zaojiu-player": path.resolve(__dirname, "./src/ts/index.ts"),
    "zaojiu-player-flash.plugin": path.resolve(__dirname, "./src/ts/flash.ts"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    library: "ZaojiuPlayer",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" }, // to inject the result into the DOM as a style block
          { loader: "css-modules-typescript-loader" }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          { loader: "css-loader", options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: [require("autoprefixer")(), require("cssnano")()],
            },
          },
          { loader: "sass-loader" }, // to convert SASS to CSS
        ],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/static/video-js.swf"),
          to: path.resolve(__dirname, "./dist/static/video-js.swf"),
        },
        {
          from: path.resolve(__dirname, "./types/zaojiu-player.d.ts"),
          to: path.resolve(__dirname, "./dist/zaojiu-player.d.ts"),
        },
        {
          from: path.resolve(__dirname, "./types/zaojiu-player-flash.plugin.d.ts"),
          to: path.resolve(__dirname, "./dist/zaojiu-player-flash.plugin.d.ts"),
        },
      ],
    }),
  ],
};

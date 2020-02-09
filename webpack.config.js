const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ROOT = "./src";

module.exports = {
  // enntry file
  entry: ["./src/ts/app.ts", "./src/assets/css/style.scss"],
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, "src/ts")],
        exclude: /node_modules/,
        use: ["ts-loader"]
        // use: {
        //   loader: "ts-loader",
        //   options: {
        //     presets: ["@babel/preset-env"],
        //     plugins: ["@babel/plugin-proposal-class-properties"]
        //   }
        // }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]?[hash]",
              publicPath: "./dist/",

              useRelativePath: true,
              outputPath: "./dist/img"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    historyApiFallback: true,
    publicPath: "/public/"
  },
  devtool: "inline-source-map",
  devtool: "source-map",
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: "development"
};

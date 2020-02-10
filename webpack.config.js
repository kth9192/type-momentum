const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ROOT = "./src";

module.exports = {
  // enntry file
  entry: ["./src/ts/app.ts", "./public/assets/css/style.scss"],
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
        test: /\.jpg$/i,
        loader: "file-loader??name=/img/[name].[ext]"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
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
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html", // public/index.html 파일을 읽는다.
      filename: "index.html" // output으로 출력할 파일은 index.html 이다.
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

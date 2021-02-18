const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: "/node_modules/",
                use: {
                    loader: "awesome-typescript-loader"
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(eot|md|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/assets/img/png/favicon.png"
        })
    ],
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
}
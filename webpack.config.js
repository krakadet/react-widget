const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
        library: 'MyApp',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: { contentBase: path.join(__dirname, "src") },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            name: "index.html",
            inject: false,
            template: path.resolve(__dirname,"src", "index.html"),
        })

    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build')
    },
    mode: 'development',
    devServer: {
        historyApiFallback : true,
        hot: true,
        contentBase: path.resolve(__dirname, './build'),
        index: 'index.html',
        port: 3000,
        proxy: {
            '/api/*': 'http://localhost:3001'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: ["babel-loader"]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: /*[
                    MiniCssExtractPlugin.loader, "css-loader"
                ]*/
                [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: { importLoaders : 1}
                    },
                    {
                        loader : require.resolve('sass-loader'),
                        options : { sourceMap : true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new CleanWebpackPlugin()
    ]
};
const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugins({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        overlay: true,
        open: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            "@babel/plugin-transform-react-jsx",
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },

        ]
    },

}
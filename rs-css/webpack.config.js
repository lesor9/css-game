const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/scripts/index.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ttf$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './assets/fonts',  
                    }
                },
            }
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
              { from: "./src/assets/images", to: "assets/images" },
            ],
        }),     
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
        // new CleanWebpackPlugin(),
    ],
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
}
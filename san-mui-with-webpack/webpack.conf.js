/**
 * @file webpack config
 * @author leon <ludafa@outlook.com>
 */

let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'node_modules/san-mui'),
                    path.resolve(__dirname, 'src')
                ] 
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};

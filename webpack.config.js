const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OUT_DIR = path.resolve(__dirname, './public/')
module.exports = {
    entry: [
        "babel-polyfill",
        './src/app-main.js'
    ],
    output: {
        path: OUT_DIR,
        publicPath: '/',
        filename: '[name].js',
    },
    node: {
        fs: "empty"
      },
    devServer: {
        port: 9801,
        publicPath: '/',
        contentBase: OUT_DIR,
      },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.styl?$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'stylus-loader']
                })
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
}
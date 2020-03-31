const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './static/index.js',//值可以是字符串、数组或对象
    output: {
        path: path.resolve(__dirname, './dist'),//Webpack结果存储
        filename: 'js/[name].[hash:8].js',
        publicPath: '/',   // 增加这个的原因是：之前vue动态路由参数，跳转之后，刷新页面，页面静态资源找不到
    },
    resolve: {
        alias: {
            static: path.resolve(__dirname, './static'),
            components: path.resolve(__dirname, './components'),
            routes: path.resolve(__dirname, './store'),
            views: path.resolve(__dirname, './views'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(woff)|(eot)|(ttf)|(woff2)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50,
                        outputPath: 'fonts',
                        // publicPath: '/assets',
                    },
                }],
            },
            {
                test: /\.(png)|(jpg)|(gif)|(svg)|(jpeg)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50,
                        outputPath: 'img',
                    },
                }],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
              },
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     exclude: /node_modules/
            // },
            // {
            //     test: /\.(png|jpg|gif|svg)$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[name].[ext]?[hash]'
            //     }
            // }
            // ,
            // {
            //     test: /\.css$/,
            //     loader: "style-loader!css-loader"
            // },
            // {
            //     test: /\.scss$/,
            //     loaders: ['style-loader', 'css-loader', 'sass-loader']
            //   },
              {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
              },
        ]
    },
    performance: {
        hints: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash:8].css",
            // chunkFilename: "[id].css"
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    priority: 10,
                    chunks: 'initial'
                },
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    minChunks: 2,
                    enforce: true
                }
            }
        }
    },
}
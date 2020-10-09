const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [{
                test: /\.css$/,
                // 使用多个loader时,webpack读取loader时是从右向左读取的
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 当加载的图片 小于limit时，会将图片编译成base64字符串形式
                        // 大于limit时，需要使用file-loader进行加载
                        limit: 13000,
                        name: 'image/[name].[hash:8].[ext]',
                    },
                }]
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: 'image/[name].[hash:8].[ext]',

            //         }
            //     }]
            // }
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                    }
                }
            },
            // {
            //     test: /\.vue$/,
            //     use: {
            //         loader: 'vue-loader',
            //         options: {
            //         }
            //     }
            // }
        ]
    },
    resolve:{
        // alias: 别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new UglifyjsWebpackPlugin(),
    ]
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|mp4|webm)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]'
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/tasks.html',
            inject: true,
            chunks: ['index'],
            filename: 'tasks.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/404.html',
            inject: true,
            chunks: ['index'],
            filename: '404.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            inject: true,
            chunks: ['index'],
            filename: 'about.html'
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
        // Добавим, чтобы сервер обслуживал файлы из src, если они не собраны
        static: [
            {
                directory: path.join(__dirname, 'src'),
                publicPath: '/'
            },
            {
                directory: path.join(__dirname, 'dist'),
            }
        ]
    },
    mode: 'development',
};
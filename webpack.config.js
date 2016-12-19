const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

const config = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.css', '.js', '.jsx', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: PATHS.app,
                use: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|svg|png|gif)$/,
                use: ['image-webpack-loader'],
                query: {
                    bypassOnDebug: true,
                    optimizationlevel: 7,
                    interlaced: false
                }
            }
        ]
    }
};

module.exports = function(env) {
    return merge(config);
};

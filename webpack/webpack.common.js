const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './source/index.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve('assets')
    },
    optimization: {
        usedExports: true
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['assets']),
    ]
};

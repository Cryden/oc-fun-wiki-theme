const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const IconFontPlugin = require('icon-font-loader').Plugin;
const CopyPlugin = require('copy-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production'


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
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    'css-loader',
                    'icon-font-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name]/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            [
                path.resolve('assets')
            ],
            {
                root: path.resolve('')
            } 
        ),
        new MiniCssExtractPlugin({
                filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
                chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
            }
        ),
        new IconFontPlugin({
                filename: 'fonts/[name]/[name].[ext]',
                publicPath: 'themes/_fun-wiki/assets/',
            }
        ),
        new CopyPlugin([
            { 
                from: 'source/images/icons', to: 'images/icons' 
            },
        ]),
    ]
};

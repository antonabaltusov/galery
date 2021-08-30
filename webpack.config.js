const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js' 
    },
    module: {
        rules: [
            { 
                test: /\.(mp3|webm)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][contenthash].[ext]'
                }
            },
            {
                test: /\.(png|jpe?g|webp|git|svg|)$/i,
                use: [
                    {
                        loader: 'img-optimize-loader',
                        options: {
                        compress: {
                            mode: 'high',
                        }
                        }
                    },
                ],
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader'],
                
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')}),
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'})
        // new BundleAnalyzerPlugin(),
    ],
    devServer: {
        port: 9000
      }    
};
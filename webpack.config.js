let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let isProduction = process.env.NODE_ENV === 'production';

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                    }
                }
            },
            {
                test: /\.less$/, // .less and .css
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'less-loader'
                ],
            }
        ]
    },
    plugins: isProduction ? [new MiniCssExtractPlugin()] : []
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production
        ? false
        : 'eval-sourcemap';
    return conf;
}
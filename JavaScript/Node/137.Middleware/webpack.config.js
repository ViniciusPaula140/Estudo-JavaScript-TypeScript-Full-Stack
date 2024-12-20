const path = require('path'); //commonJS

module.exports = {
    mode: 'development', 
    entry: './frontend/main.js', //Arquivo de entrada, caso precise mudar - pode ser o main.js  ou index.js 
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node-module/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }

        }, {
            test:/\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map'
}
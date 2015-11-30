const webpack = require('webpack');
const path = require('path');

const srcPath = path.join(__dirname, './assets');

const config = {
    //addVendor: function (name, path) {
    //    this.resolve.alias[name] = path;
    //    this.module.noParse.push(new RegExp(path));
    //},
    entry: [
        path.join(srcPath, 'index.js')
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js', '.jsx', '.json', '.html', '.scss'],
        modulesDirectories: ['node_modules', 'assets'],
        alias: {}
    },
    module: {
        noParse: [],
        preLoaders: [
            {
                test: /\.jsx$|\.js$/,
                include: [
                    path.resolve(__dirname, 'assets')
                ],
                exclude: [
                    /bundle\.js$/
                ],
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.jsx$|\.js$/,
                loaders: [
                    'babel-loader?' + JSON.stringify({presets: ['es2015', 'react']}),
                    'imports-loader?React=react&ReactDOM=react-dom'
                ],
                exclude: /node_modules/
            },
            {test: /\.json$/, loaders: ['json-loader']}
        ]
    },

    debug: true
};

module.exports = config;

const webpack = require('webpack');
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, './assets');
const production = process.env.NODE_ENV === 'production';

// postcss plugins
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const Browsers = ['last 2 versions'];

const postCssPlugins = [
    autoprefixer({browsers: Browsers})
];

if (production) {
    postCssPlugins.push(cssnano());
}

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
        modulesDirectories: ['node_modules', 'assets', 'assets/app', 'assets/css'],
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
            // css | scss
            {
                test: /\.css$|\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass']
                //loader: extractTextPlugin.extract('style-loader', 'css!postcss!sass')
            },

            // js | jsx
            {
                test: /\.jsx$|\.js$/,
                loaders: [
                    'babel-loader?' + JSON.stringify({presets: ['es2015', 'react']}),
                    'imports-loader?React=react&ReactDOM=react-dom'
                ],
                exclude: /node_modules/
            },

            // custom modules
            {
                test: /\.js$/,
                loaders: [
                    'babel-loader?' + JSON.stringify({presets: ['es2015']})
                ],
                include: [
                    /node_modules\/xop-module-utils/
                ]
            },

            // json
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,

        // display only errors to reduce the amount of output
        stats: 'errors-only',

        port: 4000
    },

    plugins: [
        //new extractTextPlugin('bundle.css'),
        new htmlWebpackPlugin({
            title: 'Flux-Flux',
            template: 'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    postcss: postCssPlugins,

    debug: true
};

module.exports = config;

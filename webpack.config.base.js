const path = require('path');
const SRC = path.join(__dirname, 'src/');
const SASS = path.join(SRC, 'sass/');
const NODE_MODULES = path.join(__dirname, 'node_modules/'); 
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "bundle.css"
});

module.exports = {
    entry: './src',                 // entry point
    output: {                       // output folder
        path: __dirname + '/dist',  // folder path
        filename: 'bundle.js'       // file name
    },
    resolve: {
    	modules: [SRC, NODE_MODULES, SASS]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
						
        ]
    },
    plugins: [
	    extractSass,
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
	  ]
};
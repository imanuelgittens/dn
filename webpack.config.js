const path = require('path');
const SRC = path.join(__dirname, 'src/');
const CSS = path.join(SRC, 'css/');
const SASS = path.join(SRC, 'sass/');
const NODE_MODULES = path.join(__dirname, 'node_modules/'); 
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    	modules: [SRC, NODE_MODULES, CSS, SASS]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
						{
	            test: /\.scss$/,
	            use: extractSass.extract({
	                use: [{
	                    loader: "css-loader"
	                }, {
	                    loader: "sass-loader"
	                }],
	                // use style-loader in development
	                fallback: "style-loader"
	            })
		        }
        ]
    },
    plugins: [
	    extractSass
	  ],
    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
        port: 8082
    }
};
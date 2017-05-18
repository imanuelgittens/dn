const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = {
    module: {
        rules: [
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
    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
        port: 9000
    }
};
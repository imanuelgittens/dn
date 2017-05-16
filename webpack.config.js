module.exports = {
    entry: './src',                 // entry point
    output: {                       // output folder
        path: __dirname + '/dist',  // folder path
        filename: 'bundle.js'       // file name
    },
    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
        port: 9000
    }
};
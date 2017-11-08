let webpack = require('webpack')
let path = require('path')

// understand what you need to change and why you have to change it.
module.exports = {

    // entry of react code I wrote.
    // find my code, bundle it, and put them into output.
    entry:{
        // begin of my react code
        app: './src/app.js'
    },
    output:{
        // compiling result, the place my code actually runs
        filename: 'public/build/bundle.js',
        // make debugging easier... a gillion times 
        sourceMapFilename: 'public/build/bundle.map'
    },
    devtool: '#source-map',
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                // no longer allowed to omit the '-loader' suffix
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}
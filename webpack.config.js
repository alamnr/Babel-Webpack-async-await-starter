const path = require('path');

module.exports = {
    
    entry: ['babel-polyfill','./src/app.js'],
    mode: "development",
    output:{
        path: path.resolve(__dirname,'build'),
        filename: 'app.bundle.js'
    },
    module:{
        rules: [{
            test: /\.js?$/,
            exclude:/node_modules/,
            loader: 'babel-loader',
            query:{
                presets:['env']
            }
        }]
    }
}
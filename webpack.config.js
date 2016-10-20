const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const srcPath = './src';

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => nodeModules[mod] = 'commonjs ' + mod);

module.exports = {
    entry: './src/main.ts',
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'server.js'
    },
    resolve: {
        root: srcPath,
        moduleDirectories: ['node_modules'],
        extensions: ['', '.js', '.ts', '.tsx', '.css']
    },
    externals: nodeModules,
    module: {
        loaders: [
            {
                test: /\.(ts|tsx)?$/,
                loaders: ["ts-loader"]
            }
        ]
    }
}
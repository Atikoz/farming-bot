const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const nodeExternals = require('webpack-node-externals');

module.exports = ({ development }) => ({
    entry: './src/index.ts',
    devtool: development ? 'inline-source-map' : false,
    mode: development ? 'development' : 'production',
    target: 'node',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'decimal',
        libraryExport: 'default',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'typeof self === \'undefined\' ? this : self',
    },
    resolve: {
        extensions: ['.ts'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //     }
            // },
        ],
    },
    plugins: [
        new NodePolyfillPlugin()
    ],
    externals: [nodeExternals()]
});
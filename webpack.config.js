const path = require('path');

module.exports = {
    mode: 'production',

    entry: './src/ts/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build/js'),
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.ts'],
    },
};

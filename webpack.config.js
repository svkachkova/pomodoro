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
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.ts', '.tsx'],
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};

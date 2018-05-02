const Path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: Path.resolve(__dirname, 'src/index.js'),
    output: {
        path: Path.resolve(__dirname, 'docs'),
        filename: 'index.js'
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
};

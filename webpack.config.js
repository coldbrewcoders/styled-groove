
module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "index.js",
        sourceMapFilename: 'index.js.map',
        path:  __dirname + "/dist",
        libraryTarget: "commonjs"
    },
    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: [ ".js", ".jsx" ],
    },
    module: {
        rules: [
            { enforce: "pre", test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "eslint-loader" },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, use: ["css-loader"] },
            { test: /\.(png|svg|jpe?g|gif|woff|woff2|eot|ttf|otf)$/, loader: "file-loader" },
        ]
    }
};
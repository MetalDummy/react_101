var config = {
    entry: './main.js',
    output: {
        path: 'C:\\Users\\Pasante_Innovacion\\Documents\\CAPACITACION\\reactApp',
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]

    }
}
module.exports = config;
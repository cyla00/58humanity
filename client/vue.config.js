var path = require('path')

module.exports = {
    // publicPath: './dist',
    outputDir: path.resolve(__dirname, '../server/dist'),
    devServer: {
        proxy: {
            '/api': {
                target: `http://localhost:3001`
            }
        }
    }
}
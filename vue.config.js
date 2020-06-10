module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/activity': {
                target: 'www.imooc.com',
                changeOrigin: true,
                pathRewrite: {
                    '/activity' : '/activity'
                }
            }
        }
    }
}
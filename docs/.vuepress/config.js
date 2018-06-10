module.exports = {
    title: 'Hello VuePress',
    description: 'Global description',
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    }
}

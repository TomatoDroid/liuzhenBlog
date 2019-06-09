'use strict'

const path = require('path')
module.exports = {
    entry:{
        app:'./src/index.js',
        serch:'./src/serch.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    mode:'production'
}
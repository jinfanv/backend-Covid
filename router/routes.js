const bed = require('../components/bed/network')

function routes (server) {
    server.use('/bed', bed)    
}

module.exports = routes

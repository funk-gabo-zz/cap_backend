const message =  require('../components/message/network')
const user =  require('../components/usuario/network')
const chat =  require('../components/chat/network')
const client =  require('../components/cliente/network')
const platform =  require('../components/plataforma/network')
const cap =  require('../components/capacitaciones/network')
const training =  require('../components/training/network')

const routes = function (server) {
    server.use('/message', message)
    server.use('/user', user)
    server.use('/chat', chat)
    server.use('/client', client)
    server.use('/platform', platform)
    server.use('/cap', cap)
    server.use('/training', training)
}

module.exports = routes
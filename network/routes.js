const message =  require('../components/message/network')
const user =  require('../components/usuario/network')
const chat =  require('../components/chat/network')
const cliente =  require('../components/cliente/network')
const platform =  require('../components/plataforma/network')
const cap =  require('../components/capacitaciones/network')
const training =  require('../components/training/network')
const client =  require('../components/client/network')
const status =  require('../components/tstatus/network')
const mode =  require('../components/tmode/network')
const service =  require('../components/tservice/network')

const routes = function (server) {
    server.use('/message', message)
    server.use('/user', user)
    server.use('/chat', chat)
    server.use('/cliente', cliente)
    server.use('/platform', platform)
    server.use('/cap', cap)
    server.use('/training', training)
    server.use('/client', client)
    server.use('/status', status)
    server.use('/mode', mode)
    server.use('/service', service)
}

module.exports = routes
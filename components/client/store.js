const Model = require('./model')
//const list = []

function addClient(client) {
    //list.push(message)
    const myClient = new Model(client)
    return myClient.save()
}

function listClients() {
    return Model.find()
}

async function updateClient(id, client) {
    const foundClient = await Model.findById(id)
    foundClient.name = client
    const newClient = await foundClient.save()
    return newClient
}

function removeClient(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addClient,
    list: listClients,
    updateClient: updateClient,
    remove: removeClient
}
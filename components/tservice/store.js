const Model = require('./model')
//const list = []

function addService(service) {
    //list.push(message)
    const myService = new Model(service)
    return myService.save()
}

function listService() {
    return Model.find()
}

async function updateService(id, service) {
    const foundService = await Model.findById(id)
    foundService.name = service
    const newService = await foundService.save()
    return newService
}

function removeService(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addService,
    list: listService,
    updateMode: updateService,
    remove: removeService
}
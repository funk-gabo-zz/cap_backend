const Model = require('./model')
//const list = []

function addStatus(status) {
    //list.push(message)
    const myStatus = new Model(status)
    return myStatus.save()
}

function listStatus() {
    return Model.find()
}

async function updateStatus(id, status) {
    const foundStatus = await Model.findById(id)
    foundStatus.name = status
    const newStatus = await foundStatus.save()
    return newStatus
}

function removeStatus(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addStatus,
    list: listStatus,
    updateStatus: updateStatus,
    remove: removeStatus
}
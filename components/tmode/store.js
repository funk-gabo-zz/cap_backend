const Model = require('./model')
//const list = []

function addMode(mode) {
    //list.push(message)
    const myMode = new Model(mode)
    return myMode.save()
}

function listMode() {
    return Model.find()
}

async function updateMode(id, mode) {
    const foundMode = await Model.findById(id)
    foundMode.name = mode
    const newMode = await foundMode.save()
    return newMode
}

function removeMode(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMode,
    list: listMode,
    updateMode: updateMode,
    remove: removeMode
}
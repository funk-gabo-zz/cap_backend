const Model = require('./model')

function addCap(cap) {
    const myCap =  new Model(cap)
    return myCap.save()
}

async function getCaps() {
    const cap = await Model.find()
    return cap
}

async function updateCap(id, cap) {
    const foundCap = await Model.findById(id)
    foundCap.name = cap
    const newCap = await foundCap.save()
    return newCap
}

function removeCap(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addCap,
    list: getCaps,
    update: updateCap,
    remove: removeCap,
}
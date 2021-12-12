const Model = require('./model')

function addPlatform(platform) {
    const myPlatform =  new Model(platform)
    return myPlatform.save()
}

async function getPlatform() {
    const platform = await Model.find()
    return platform
}

async function updatePlatform(id, platform) {
    const foundPlatform = await Model.findById(id)
    foundPlatform.name = platform
    const newPlatform = await foundPlatform.save()
    return newPlatform
}

function removePlatform(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addPlatform,
    list: getPlatform,
    update: updatePlatform,
    remove: removePlatform,
}
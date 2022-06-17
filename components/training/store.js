const Model = require('./model')

function addTraining(train) {
    const myTrain =  new Model(train)
    return myTrain.save()
}

async function getTrainings() {
    const train = await Model.find()
    return train
}

async function updateTraining(id, status) {
    const foundTrain = await Model.findById(id)
    foundTrain.status = status
    const newTrain = await foundTrain.save()
    return newTrain
}

function removeTraining(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addTraining,
    list: getTrainings,
    update: updateTraining,
    remove: removeTraining,
}
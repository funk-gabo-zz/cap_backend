const Model = require('./model')

function addUser(user) {
    const myUser =  new Model(user)
    return myUser.save()
}

async function getUsers() {
    const users = await Model.find()
    return users
}

async function updateUser(id, user) {
    const foundUser = await Model.findById(id)
    foundUser.name = user
    const newUser = await foundUser.save()
    return newUser
}

function removeUser(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addUser,
    list: getUsers,
    update: updateUser,
    remove: removeUser
}
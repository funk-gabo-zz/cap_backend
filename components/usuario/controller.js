const store = require('./store')

function addUser(name) {
    if(!name) {
        return Promise.reject('invalid Name')
    }
    const user = {
        name,
    }
    return store.add(user)
}

function getUsers() {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}

function updateUser(id, user){
    return new Promise(async (resolve, reject) => {
        if(!id || !user){
            reject('invalid data')
            return false
        }
        const result = await store.update(id, user)

        resolve(result)
    })
}

function deleteUser(id) {
    return new Promise((resolve, reject) =>{
        if(!id){
            reject('Id inválido')
            return false
        }
        store.remove(id)
            .then(() =>{
                resolve()
            })
            .catch(e => {
                reject(e)
            })
    })
}
module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
}
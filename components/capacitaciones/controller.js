const store = require('./store')

function addCap(user, client, platform) {
    if(!user || !client || !platform) {
        return Promise.reject('invalid Name')
    }
    const cap = {
        user,
        client,
        platform
    }
    return store.add(cap)
}

function getCaps() {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}

function updateCap(id, cap){
    return new Promise(async (resolve, reject) => {
        if(!id || !cap){
            reject('invalid data')
            return false
        }
        const result = await store.update(id, cap)

        resolve(result)
    })
}

function deleteCap(id) {
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
    addCap,
    getCaps,
    updateCap,
    deleteCap
}
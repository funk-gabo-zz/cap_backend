const store = require('./store')

function addPlatform(name) {
    if(!name) {
        return Promise.reject('invalid Name')
    }
    const platform = {
        name,
    }
    return store.add(platform)
}

function getPlatforms() {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}

function updatePlatform(id, platform){
    return new Promise(async (resolve, reject) => {
        if(!id || !platform){
            reject('invalid data')
            return false
        }
        const result = await store.update(id, platform)

        resolve(result)
    })
}

function deletePlatform(id) {
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
    addPlatform,
    getPlatforms,
    updatePlatform,
    deletePlatform
}
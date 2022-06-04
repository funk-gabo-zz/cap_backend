const store = require('./store')

function addMode(mode) {
    if(!mode){
        return Promise.reject('Invalid Values');
    } else {
        console.log(mode)
    }
    
    const tmode = {
        mode,
    };

    return store.add(tmode)
}

function listMode() {
    return store.list()
}

function deleteMode(id) {
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

function updateMode(id, mode){
    return new Promise(async (resolve, reject) => {
        if(!id || !mode){
            reject('invalid data')
            return false
        }
        const result = await store.updateMode(id, mode)

        resolve(result)
    })
}

module.exports = {
    addMode,
    listMode,
    deleteMode,
    updateMode
}
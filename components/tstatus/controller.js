const store = require('./store')

function addStatus(status) {
    if(!status){
        return Promise.reject('Invalid Values');
    } else {
        console.log(status)
    }
    
    const tstatus = {
        status,
    };

    return store.add(tstatus)
}

function listStatus() {
    return store.list()
}

function deleteStatus(id) {
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

function updateStatus(id, status){
    return new Promise(async (resolve, reject) => {
        if(!id || !status){
            reject('invalid data')
            return false
        }
        const result = await store.updateStatus(id, status)

        resolve(result)
    })
}

module.exports = {
    addStatus,
    listStatus,
    deleteStatus,
    updateStatus
}
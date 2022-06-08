const store = require('./store')

function addService(service) {
    if(!service){
        return Promise.reject('Invalid Values');
    } else {
        console.log(service)
    }
    
    const tservice = {
        service,
    };

    return store.add(tservice)
}

function listService() {
    return store.list()
}

function deleteService(id) {
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

function updateService(id, service){
    return new Promise(async (resolve, reject) => {
        if(!id || !service){
            reject('invalid data')
            return false
        }
        const result = await store.updateMode(id, service)

        resolve(result)
    })
}

module.exports = {
    addService,
    listService,
    deleteService,
    updateService
}
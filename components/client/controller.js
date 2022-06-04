const store = require('./store')

function addClient(name, address, kam) {
    if(!name || !address || !kam){
        return Promise.reject('Invalid Values');
    }
    
    const client = {
        name,
        address,
        kam
    };

    return store.add(client)
}

function listClients() {
    return store.list()
}

function deleteClient(id) {
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

function updateClient(id, client){
    return new Promise(async (resolve, reject) => {
        if(!id || !client){
            reject('invalid data')
            return false
        }
        const result = await store.updateClient(id, client)

        resolve(result)
    })
}

module.exports = {
    addClient,
    listClients,
    deleteClient,
    updateClient
}
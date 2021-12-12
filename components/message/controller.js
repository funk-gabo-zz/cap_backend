const store = require('./store')

function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if(!chat || !user || !message) {
            console.error('[message controller] No hay usuario o mensaje')
            return reject('Los datos son incorrectos')
        }

        let fileUrl = ''
        if(file) {
            fileUrl = 'http://localhost:3001/app/files/' + file.filename
        }

        const fullMessage = {
            chat,
            user,
            message,
            date: new Date(),
            file: fileUrl
        }
        console.log(fullMessage)
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser))
    })
}

function updateMessage(id, message){
    return new Promise(async (resolve, reject) => {
        if(!id || !message){
            reject('invalid data')
            return false
        }
        const result = await store.updateText(id, message)

        resolve(result)
    })
}

function deleteMessage(id) {
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
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}
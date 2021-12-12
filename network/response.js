exports.success = function(req, res, message, status){
    console.log(message)
    res.status(status || 200).json(message)
}

exports.error = function(req, res, message, status, details){
    console.log('[response error]   '+details)
    res.status(status || 500).send({
        error: message,
        body: ''
    })
}
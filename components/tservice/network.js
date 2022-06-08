const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.post('/', function(req, res) {
    controller.addService(
        req.body.service,
        )
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(err => {
            response.error(req, res, 'Internal Error', 500, err)
        })
})

router.get('/', function (req,res) {
    controller.listService()
    .then(service => {
        response.success(req, res, service, 200)
    })
    .catch(err => {
        response.error(req, res, 'Internal Error', 500, err)
    })
})

router.patch('/:id', function (req, res) {
    controller.updateService(req.params.id, req.body.service)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((e) => {
            response.error(req, res, 'Error interno', 500, e)
        })
})

router.delete('/:id', function (req, res) {
    controller.deleteService(req.params.id)
        .then(() => {
            response.success(req, res, `Servicio ${req.params.id} eliminado`, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        })
})

module.exports = router
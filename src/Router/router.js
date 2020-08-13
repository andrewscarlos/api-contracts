const express = require('express')
const routes = express.Router()
const ContratoController = require('../Controller/Contratos')


//ROTAS DO ESTADO DE CRIAÇÃO DO CONTRATO
routes.get('/contratos', ContratoController.index)
routes.get('/contratos/:id', ContratoController.show)
routes.put('/contratos/:id', ContratoController.update)
routes.post('/contratos', ContratoController.create)

//ROTAS DE UPLOAD DE IMAGENS

module.exports = routes
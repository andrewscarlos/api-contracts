const express = require('express')
const routes = express.Router()

const ContratoController = require('../Controller/Contratos')
const UploadController = require('../Controller/Uploads')

//ROTAS DO ESTADO DE CRIAÇÃO DO CONTRATO
routes.get('/contratos', ContratoController.index)
routes.get('/contratos/:id', ContratoController.show)
routes.put('/contratos/:id', ContratoController.update)
routes.post('/contratos', ContratoController.create)

//ROTAS DE UPLOAD DE IMAGENS
routes.post('/contratos/upload/:id', UploadController.create)

//ROTAS DE RESULTADOS



module.exports = routes
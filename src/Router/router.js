const routes = require('express').Router()
const multer = require('multer')
const configUpload = require('../Config/upload')
const upload = multer(configUpload)

const uploadValidator = require('../Middlewares/upload')




const ContratoController = require('../Controller/Contratos')
const UploadController = require('../Controller/Uploads')
const AprovacaoController = require('../Controller/Aprovacao')



//ROTAS DO ESTADO DE CRIAÇÃO DO CONTRATO
routes.get('/contratos', ContratoController.index)
routes.get('/contratos/:id', ContratoController.show)
routes.put('/contratos/:id', ContratoController.update)
routes.post('/contratos', ContratoController.create)



//ROTAS DE UPLOAD DE IMAGENS
routes.put('/contratos/upload/:id', upload.array('file'), UploadController.update)


//ROTAS DE RESULTADOS
routes.get('/contratos/upload/result/:id', AprovacaoController.index)


module.exports = routes
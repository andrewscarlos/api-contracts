const routes = require('express').Router()
const multer = require('multer')
const configUpload = require('../Config/upload')
const upload = multer(configUpload)

const ContratoController = require('../Controller/Contratos')
const UploadController = require('../Controller/Uploads')
const AprovacaoController = require('../Controller/Aprovacao')
                                           //ROTAS DO ESTADO DE CRIAÇÃO DO CONTRATO
//endpoint lista todos os contratos
routes.get('/contratos', ContratoController.index)

//endpoint lista o contrato de determinado id
routes.get('/contratos/:id', ContratoController.show)

// endpoint atualiza o contrato
routes.put('/contratos/:id', ContratoController.update)

// endpoint cria um contrato novo
routes.post('/contratos', ContratoController.create)

                                          //ROTAS DE UPLOAD DE IMAGENS
// endpoint necessita do id do contrato e faz o upload dos arquivos de imgs 
routes.put('/contratos/upload/:id', upload.array('file'), UploadController.update)

                                           //ROTAS DE RESULTADOS
//esse endpoint verifica a situação do contrato e diz se esta aprovado ou reprovado 
routes.get('/contratos/upload/result/:id', AprovacaoController.index)

module.exports = routes
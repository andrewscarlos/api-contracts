const routes = require('express').Router()
const path = require('path')
const fs = require('fs')
const multer = require('multer')
const configUpload = require('../Config/upload')

const envio = multer(configUpload)



const ContratoController = require('../Controller/Contratos')
const UploadController = require('../Controller/Uploads')

const uploadValidator = require('../Middlewares/upload')

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.resolve(__dirname, '..','..','uploads'));
	},
    filename: function (req, file, cb) {

		cb(null, `file-${Date.now()}${path.extname(file.originalname)}`);
	}
});


const imgfolder = (req, res, next) => {    // ve se tem algu
	const folder = path.resolve(__dirname, '..','..','uploads')
	if (!fs.existsSync(folder)) {
		fs.mkdirSync(folder,{recursive: true});
	}
	next();
};

const upload = multer(storage)

//ROTAS DO ESTADO DE CRIAÇÃO DO CONTRATO
routes.get('/contratos', ContratoController.index)
routes.get('/contratos/:id', ContratoController.show)
routes.put('/contratos/:id', ContratoController.update)
routes.post('/contratos', ContratoController.create)



//ROTAS DE UPLOAD DE IMAGENS
routes.post('/contratos/upload/:id', uploadValidator, UploadController.create)

//routes.post('/impfile', imgfolder , upload.single('file'), UploadController.impfile)

routes.post('/impfile', imgfolder, envio.single('file'), (req,res)=>{
	return res.json(req.file)
} )



//ROTAS DE RESULTADOS



module.exports = routes
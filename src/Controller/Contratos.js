const Contratos = require('../Model/contratos')
const multer = require('multer')
const update = multer({ dest: 'uploads/'})

module.exports = {

        async index(req, res){
            const contratos = await Contratos.find()

            return res.json(contratos)
        },
        async show(req, res){

            const contratos = await Contratos.findById(req.params.id)

            return res.json(contratos)
        },

        async create(req, res){

        const contratos = await Contratos.create(req.body);

        return res.json(contratos)

        },

        async update(){

            const contratos = await Contratos.findByIdAndUpdate(req.params.id, req.body, { new: true })

            return res.json(contratos)
        },
}
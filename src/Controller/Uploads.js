const Contratos = require('../Model/contratos')
const multer = require('multer')
const update = multer({ dest: 'uploads/'})

module.exports = {
    async index(req, res){
        // essa rota retorna todos as collections dos seus respectivos state (tem q passar o state como parametro 'Create', 'Update' ou 'Result') 
        const contratos = await Contratos.find({'State': {'$in': req.params.State}})
        return res.json(contratos)
    },

    async show(req, res){
        const contratos = await Contratos.findById(req.params.id)
        return res.json(contratos)
    },

    async create(req, res){
       const contratos = await Contratos.findOne({_id: req.params.id})

        if (contratos == null) {
            return res.status(401).json({ error: "Id Inexistente."})
        }

        if(contratos.state == 'Upload'){
            const contratos = await Contratos.findByIdAndUpdate(req.params.id, req.body, { new: true })
            return res.json(contratos)
        }
        else{
            return  res.send({
                error : 'Voce não pode adicionar as fotos, sem antes ter um cadastro'
            })
        }  
    },

    async update(){
        const contratos = await Contratos.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(contratos)
    },
}
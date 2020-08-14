const Contratos = require('../Model/contratos')
const multer = require('multer')
const update = multer({ dest: 'uploads/'})
const contrat = require('./Contratos')



module.exports = {

    async index(req, res){// essa rota retorna todos as collections dos seus respectivos state (tem q passar o state como parametro 'Create', 'Update' ou 'Result') 

        const contratos = await Contratos.find({'State': {'$in': req.params.State}})
        //await contrat.atualizaState(contratos._id)
        return res.json(contratos)

    },
    async show(req, res){

        const contratos = await Contratos.findById(req.params.id)
        return res.json(contratos)

    },

    async create(req, res){

      //  estado = await contrat.atualizaState(req.params.id)
      
        estado = false
        if(estado === true){

            //const { CNHorCPF, ComprovanteRenda, Imovel } = req.body
            const contratos = await Contratos.findByIdAndUpdate(req.params.id, req.body, { new: true })
            //const contratos = await Contratos.update({CNHorCPF, ComprovanteRenda, Imovel})
            return res.json(contratos)
        }
        else{
            return  res.send({
                error : 'Voce não pode adicionar as fotos, sem antes ter adicionado o NOME, EMAIL, CPF ou VALOR DO EMPRESTIMO ! '
            })
        }
        

        

    },

    async update(){

        const contratos = await Contratos.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(contratos)

    },
}
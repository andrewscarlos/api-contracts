const Contratos = require('../Model/contratos')
const state = {
    0: 'Create',
    1: 'Update',
    2: 'Result'
}


class Contracts {

    async  atualizaState(req, res){

        // essa funçao atualiza o state de 'criado' para envio 'envio' é necessario passar o id como parametro
        const contratos = await Contratos.findById(req.params.id)
        if(contratos.State === 'Create'){
         await Contratos.update({_id: req.params.id}, {$set:{State: 'Upload' }})
           // await Contratos.updateOne( {State: 'Update'} )
            return res.json('Upload')
        }
        return res.json('Create')
    }

  

    // retorna todos os contratos
    async index(req, res){
        const contratos = await Contratos.find()
        .then(response =>{
            return res.status(200).json(response)
        }).catch(error =>{
            return res.status(500).json(error)
        }) 
    }
    // retorna um conrtato especifico por _id
    async show(req, res){

        
        const contratos = await Contratos.findById(req.params.id)
        .then(response =>{
            return res.status(200).json(response)
        }).catch(error =>{
            return res.status(500).json(error)
        })  
    }
    // cria um contrato novo se estiver td certo com os campos obrigatorios
    async create(req, res){
        const {Nome, Email, Cpf, ValorEmprestimo, RendaMensal, DataNascimento, EstadoCivil, Endereco} = req.body
        const contratos = await Contratos.create({ Nome, Email, Cpf, ValorEmprestimo, RendaMensal, DataNascimento, EstadoCivil, Endereco })
        .then(response =>{
            return res.status(200).json(response)
        }).catch(error =>{
            return res.status(500).json(error)
        })
    }
 // atualiza um contrato 
    async update(req, res){
       
        const contratos = await Contratos.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(response =>{
            return res.status(200).json(response)
        }).catch(error =>{
            return res.status(500).json(error)
        })  
    }
}
        
module.exports = new Contracts()
const Contratos = require('../Model/contratos')


class Contracts {

    async   atualizaState(id){
    
        
        const contratos = await Contratos.findById(id)
        if(contratos.State === 'Create'){
         await Contratos.updateOne({_id: id}, {$set:{State: 'Upload' }})
           // await Contratos.updateOne( {State: 'Update'} )
            return true
        }
        return false
    }
 

    // retorna todos os contratos
    async index(req, res){
        await Contratos.find()
        .then(response =>{
            return res.status(200).json(response)
        }).catch(error =>{
            return res.status(500).json(error)
        }) 
    }
    // retorna um conrtato especifico por _id
    async show(req, res){

        
        await Contratos.findById(req.params.id)
        .then(response =>{
            return res.status(200).json(response)
        }).catch(error =>{
            return res.status(500).json(error)
        })  
    }
    // cria um contrato novo se estiver td certo com os campos obrigatorios
    async create(req, res){

         const cadastro = req.body
        
         await Contratos.create({ ...cadastro, state:'Upload' })
        .then(response =>{
            return res.status(200).json(response)
        }).catch(error =>{
            return res.status(500).json(error)
        })
    }
 // atualiza um contrato 
    async update(req, res){
       
        await Contratos.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(response =>{
            return res.status(200).json(response)
        }).catch(error =>{
            return res.status(500).json(error)
        })  
    }
}
        
module.exports = new Contracts()
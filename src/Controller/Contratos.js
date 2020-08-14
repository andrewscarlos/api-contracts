const Contratos = require('../Model/contratos')


// retorna todos os contratos
const index = async (req, res) => {

    try{
        const response = await Contratos.find()
        return res.status(200).json(response)
    }catch(error){
        if(error){
            return res.status(500).json(error)
        }
    } 
}

// retorna um conrtato especifico por _id
const show = async (req, res) => {

    try{
        const response = await Contratos.findById(req.params.id)
        return res.status(200).json(response)
    }catch(error){
        if(error){
            return res.status(500).json(error)
        }
    } 
}

// cria um contrato novo se estiver td certo com os campos obrigatorios
const create = async (req, res) => {

    try{
        const cadastro = req.body
        const response = await Contratos.create({...cadastro})
        return res.status(200).json(response)
    }catch(error){
        if(error){
            return res.status(500).json(error)
        }
    } 
}



const update = async (req, res) => {
       
    try{
        const response = await Contratos.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.status(200).json(response)
    }catch(error){
        if(error){
            return res.status(500).json(error)
        }
    } 

}
        



module.exports = {
    index,
    show,
    create,
    update
}
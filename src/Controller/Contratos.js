const Contratos = require('../Model/contratos')


// retorna todos os contratos
const index = async (req, res) => {

    try{
        const response = await Contratos.find()
        return res.status(200).json(response)
    }catch(error){
        
            return res.status(500).json(error)
        
    } 
}
// retorna um conrtato especifico por _id
const show = async (req, res) => {

    try{
        const response = await Contratos.findById(req.params.id)
        return res.status(200).json(response)
    }catch(error){
            return res.status(500).json(error)
    } 
}
// cria um contrato novo se estiver td certo com os campos obrigatorios
const create = async (req, res) => {

    try{
        const cadastro = req.body
        const response = await Contratos.create({...cadastro})
        return res.status(200).json(response)
    }catch(error){
            return res.status(500).json(error)
        }
    } 


const update = async (req, res) => { // essa funcao executa o update do contrato caso o state seje de create
    const contratos = await Contratos.findById(req.params.id)
    try{
         if(contratos.state === 'Create'){
            await contratos.updateOne( req.body, {new: true})
            return res.status(200).json(contratos)
         }else{
            console.log('else')
            return res.status(200).json({
               
                 Mensagem: 'O seu status precisa estao em Create para poder alterar as informações ! '
             })
         } 
    }catch(error){
            return res.status(500).json(error)
        
    } 

}
module.exports = {
    index,
    show,
    create,
    update
}
const Contratos = require('../Model/contratos')

// http://cangaceirojavascript.com.br/express-realizando-upload-multer/

const impfile = async (req,res) => {
    if(req.file){
        //upload sucesso
        
        req.body.file = req.file
        //inserir no banco etc
    }
    console.log(req.body)
    return res.send(req.body)
}



module.exports = {
    async index(req, res){
        // essa rota retorna todos as collections dos seus respectivos state (tem q passar o state como parametro 'Create', 'Update' ou 'Result') 
        const contratos = await Contratos.find({'State': {'$in': req.params.State}})
        return res.json(contratos)
    },
    // mostra um contrato passa o id como parametro
    async show(req, res){
        const contratos = await Contratos.findById(req.params.id)
        return res.json(contratos)
    },
        //essa rota faz o upload das imgs, se o state for upload
    async create(req, res){
       const contratos = await Contratos.findOne({_id: req.params.id})

        if (contratos == null) {
            return res.status(401).json({ error: "Id Inexistente."}) // verifica se o id existe
        }

        if(contratos.state == 'Upload'){
            const contratos = await Contratos.findByIdAndUpdate(req.params.id, req.body, { new: true }) // se a state for upload ele faz o upload das imagens
            return res.json(contratos)
        }
        else{
            return  res.send({
                error : 'Voce não pode adicionar as fotos, sem antes ter um cadastro'
            })
        }  
    },
    // atualiza um contrato passando id como parametro
    async update(){
        const contratos = await Contratos.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(contratos)
    },
    impfile
}
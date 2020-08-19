const Contratos = require('../Model/contratos')

const multer = require('multer')
const configUpload = require('../Config/upload')
   const index = async (req, res) =>{
       try {
            // essa rota retorna todos as collections dos seus respectivos state (tem q passar o state como parametro 'Create', 'Update' ou 'Result') 
        const contratos = await Contratos.find({'State': {'$in': req.params.State}})
        return res.json(contratos)
       } catch (error) {
        return res.status(500).json(error)
       }
       
    }
        //essa rota faz o upload das imgs, se o state for upload
    const update = async  (req, res) =>{

        try {
            const contratos = await Contratos.findOne({_id: req.params.id})
            const item = req.files  
          
            if (contratos == null) {
                
                return res.status(401).json({ error: "Id Inexistente."}) // verifica se o id existe
            }
           
            if(item.length <= 3){
             
            await contratos.updateOne({
                cNHorCPF: item[0].filename, 
               state: 'Upload'
            })
            if(item[1] != null){
                await contratos.updateOne({
                    comprovanteRenda: item[1].filename
                })  
            }
            if(item[2] != null){
                await contratos.updateOne({
                    imovel: item[2].filename,
                })
                
            }
             
                return res.json(req.files)
            }
           
            else{
        
                return  res.send({
                    error : 'Voce pode passar no maximo 3 arquivos'
                })
            } 
            
        } catch (error) {
            
            return res.status(500).json(error)
        }
            
            
      
    }
module.exports = {
    index,
    update
}
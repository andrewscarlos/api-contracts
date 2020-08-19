const Contratos = require('../Model/contratos')

const index = async (req, res) => {
    try{
        const contratos = await Contratos.findOne({_id: req.params.id})
        if (contratos == null) {
            console.log('if 1')
            return res.status(401).json({ error: "Id Inexistente."}) // verifica se o id existe
        }
        if(contratos.state == 'Upload'){
       
            const result = Math.floor(Math.random()*(10-1+1)+1);
            console.log(result)

            if(result % 2 == 0){
                
                await contratos.updateOne({
                    status: 'Aprovado',
                    state:'Resultado'
                })
            }else{
                
                await contratos.updateOne({
                    status: 'Reprovado',
                    state:'Resultado'
                })
            }
            if(contratos.status == 'Aprovado'){
                
                return res.status(200).json({
                    Resultado: 'É com grande alegria que dizemos ao Sr(a) que seu emprestimo foi autorizado !!!'
                })
            }else{
                return res.status(200).json({
                    Resultado: 'É com grande tristeza que dizemos ao Sr(a) que seu emprestimo foi recusado !!!'
                })
            }
        }
        return res.status(200).json({
            
            Mensagem: 'O seu state precisa estar como Upload '
        })
    }catch(error){
        if(error){
            console.log('if 4')
            return res.status(500).json(error)
        }
    } 
}
module.exports = {
    index
}
